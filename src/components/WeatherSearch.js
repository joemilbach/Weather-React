import React, { Component } from "react";
import api from "./api";
import weatherCondition from "./weatherCondition";
import WeatherIcon from "./WeatherIcon";
import dateBuilder from "./dateBuilder";

class WeatherSearch extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState
  }

  get initialState() {
    return {
      inputs: [
        { name: 'Search', value: '', error: ''}
      ],
      query: '',
      weather: {},
      location: {}
    }
  }

  clearSearch = () => this.setState(this.initialState)

  searchInputChange = (idx,event) => {
    const target = event.target
    let error = ''

    if (!target.value) {
      this.clearSearch()
    }

    this.setState({
      inputs: [{
        ...this.state.inputs[idx],
          value: target.value,
          error
      }]
    })
  }

  apiErrorHandling = (response,idx) => {
    let error = ''

    if (!response.ok) {
      error = `Error ${response.statusText}`

      this.setState({
        inputs: [{
          ...this.state.inputs[idx],
            value: '',
            error
        }]
      })

      throw new Error(`${response.status} (${response.statusText})`)
    } else {
      return response.json()
    }
  }

  searchSubmit = (idx,event) => {
    const target = event.target
    let error = ''

    if (event.key === "Enter") {
      fetch(`${api.mapBaseUrl}address?key=${api.mapKey}&location=${encodeURIComponent(target.value)}`)
      .then(response => this.apiErrorHandling(response,idx))
      .then(result => {
        if (result.results[0].locations[0].geocodeQuality === 'CITY' || result.results[0].locations[0].geocodeQuality === 'STATE') {
          this.setState({
            location: result.results[0].locations[0]
          })
          this.currentWeather(result.results[0].locations[0].latLng.lat,result.results[0].locations[0].latLng.lng,target,idx)
          target.blur();
        } else {
          error = `Location unknown try again`

          this.setState({
            inputs: [{
              ...this.state.inputs[idx],
                value: '',
                error
            }]
          })

          throw new Error(`geocodeQuality (${result.results[0].locations[0].geocodeQuality })`)
        }
      })
      .catch((error) => console.log('Fetch error:', error.message))
    }
  }

  currentWeather = (lat,lon,idx) => {
    fetch(`${api.weatherBaseUrl}onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,daily&appid=${api.weatherKey}`)
    .then(response => this.apiErrorHandling(response,idx))
    .then(result => {
      this.setState({
        weather: result.current
      })
    })
    .catch((error) => console.log('Fetch error:', error.message))
  }

  render() {
    return (
      <main className={((typeof this.state.weather.temp != 'undefined') ? `app container-fluid py-3 ${weatherCondition(this.state.weather.weather[0].main)}` : 'app centered container-fluid py-3')}>
        <div className="intro">
          <h1>Local Weather Widget</h1>
          <div className="form">
            {this.state.inputs.map((input, idx) => (
              <div key={input.name.toLowerCase()} className="form-group form-group-search">
                <label className="sr-only" htmlFor={input.name.toLowerCase()}>{input.name}</label>
                <input type="text" name={input.name.toLowerCase()} className="form-control form-control-search" placeholder="Enter city and state" value={input.value} onChange={(e) => this.searchInputChange(idx, e)} onKeyPress={(e) => this.searchSubmit(idx, e)}/>
                {input.error && <div className="invalid-feedback">{input.error}</div>}
                {input.value && <button type="button" className="btn btn-reset" onClick={this.clearSearch}><span className="sr-only">Reset</span></button>}
              </div>
            ))}
          </div>
        </div>
        {(typeof this.state.weather.temp != 'undefined') ? (
        <div className="card card-weather">
          {dateBuilder(new Date())}
          <div className="card-icn mt-auto">
            <WeatherIcon>{weatherCondition(this.state.weather.weather[0].main)}</WeatherIcon>
            <h3 className="card-icn-label">
              {Math.round(this.state.weather.temp)}°C
            </h3>
            <p className="card-subtitle">
              {this.state.weather.weather[0].description}
            </p>
          </div>
          <p className="card-location mt-auto">
            {((this.state.location.adminArea5 !== '') ? `${this.state.location.adminArea5},` : '')}{((this.state.location.adminArea1 !== 'US') ? ` ${this.state.location.adminArea1}` : ` ${this.state.location.adminArea3}`)}
          </p>
        </div>
        ) : ('')}
      </main>
    );
  }
}

export default WeatherSearch;