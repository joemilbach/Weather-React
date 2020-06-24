import React, { Component } from "react"
import Api from "./Api"
import { ReactComponent as CloudySvg } from "../assets/Weather_ICN-Cloudy.svg";
import { ReactComponent as SunnySvg } from "../assets/Weather_ICN-Sunny.svg";
import WeatherCondition from "./WeatherCondition"
import WeatherCard from "./WeatherCard"

class WeatherSearch extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState
  }

  get initialState() {
    return {
      inputs: [
        { name: 'Search', value: '', error: null}
      ],
      query: '',
      weather: {},
      location: {},
      isLoading: false
    }
  }

  clearSearch = () => this.setState(this.initialState)

  searchInputChange = (idx,event) => {
    const target = event.target

    if (!target.value) {
      this.clearSearch()
    }

    this.setState({
      inputs: [{
        ...this.state.inputs[idx], value: target.value, error: null
      }]
    })
  }

  searchSubmit = (idx,event) => {
    const target = event.target

    if (event.key === "Enter") {
      this.apiCall(`${Api.mapBaseUrl}address?key=${Api.mapKey}&location=${target.value}`,'location')
      .then(this.locationResponse)
      .then(weatherCall => {
        this.weatherResponse(weatherCall,target,idx)
        .then(finalResults => {
          if(typeof finalResults != 'undefined') {
            this.setState({
              inputs: [{
                ...this.state.inputs[idx], value: target.value, error: null
              }],
              weather: finalResults.current
            })

            target.blur();
          }
        })
      })
    }
  }

  apiCall = (url) => {
    this.setState({ isLoading: true })

    return fetch(url)
      .then(response => response.json())
  }

  locationResponse = (call) => {
    let locationSelect = 0

    if(!isNaN(call.results[0].providedLocation.location)) {
      for (let i = 0; i < call.results[0].locations.length; i++) {
        if (call.results[0].locations[i].adminArea1 === 'US') {
          locationSelect = i
          break
        }
      }
    }

    if(call.results[0].locations.length > 0) {
      this.setState({
        location: call.results[0].locations[locationSelect]
      })

      return this.apiCall(`${Api.weatherBaseUrl}onecall?lat=${call.results[0].locations[locationSelect].latLng.lat}&lon=${call.results[0].locations[locationSelect].latLng.lng}&units=imperial&exclude=minutely,hourly,daily&appid=${Api.weatherKey}`,'weather')
    }
  }

  weatherResponse = (weatherResults,target,idx) => {
    let error = null

    this.setState({ isLoading: false })

    return new Promise((resolve, reject) => {
      if(weatherResults == null || (this.state.location.adminArea3 === '' && this.state.location.adminArea5 === '')) {
        error = 'Location unknown try again'
        this.setState({
          inputs: [{
            ...this.state.inputs[idx], value: '', error
          }]
        })

        target.focus();

        reject(new Error(error))
      } else {
        resolve(weatherResults)
      }
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <main className={((typeof this.state.weather.temp != 'undefined') ? `app container-fluid py-3 ${WeatherCondition(this.state.weather.weather[0].main)}` : 'app centered container-fluid py-3')}>
        <div className="intro">
          <h1>Local Weather Widget</h1>
          <div className="form">
            {this.state.isLoading ? <div className="loader"><SunnySvg /><CloudySvg /><CloudySvg /><CloudySvg /><CloudySvg /><CloudySvg /><CloudySvg /><span>Loading...</span></div> : ''}
            {this.state.inputs.map((input,idx) => (
              <div key={input.name+'-'+idx} className="form-group form-group-search">
                <label className="sr-only" htmlFor={input.name+'-'+idx}>{input.name}</label>
                <input type="text" name={input.name+'-'+idx} className="form-control form-control-search" placeholder="City, ST  /  State  /  Zipcode" value={input.value} onChange={(e) => this.searchInputChange(idx,e)} onKeyPress={(e) => this.searchSubmit(idx, e)} />
                {input.error && <div className="invalid-feedback">{input.error}</div>}
                {input.value && <button type="button" className="btn btn-reset" onClick={this.clearSearch}><span className="sr-only">Reset</span></button>}
              </div>
            ))}
          </div>
        </div>
        <WeatherCard location={this.state.location} weather={this.state.weather} />
      </main>
    );
  }
}

export default WeatherSearch;
