import React, { Component } from "react"
import Api from "./Api"
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
        { name: 'Search', value: '', error: ''}
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
        ...this.state.inputs[idx], value: target.value, error: ''
      }]
    })
  }

  searchSubmit = (idx,event) => {
    const target = event.target
    let locationResult = ''
    let locationSelect = ''
    let error = ''

    if (event.key === "Enter") {
      this.apiCall(`${Api.mapBaseUrl}address?key=${Api.mapKey}&location=${encodeURIComponent(target.value)}`)
      .then(currentLocation => {
        locationResult = currentLocation
        return this.apiCall(`${Api.weatherBaseUrl}onecall?lat=${currentLocation.results[0].locations[0].latLng.lat}&lon=${currentLocation.results[0].locations[0].latLng.lng}&units=imperial&exclude=minutely,hourly,daily&appid=${Api.weatherKey}`)
      })
      .then(currentWeather => {
        locationSelect = 0
        if(!isNaN(locationResult.results[0].providedLocation.location)) {
          for (let i = 0; i < locationResult.results[0].locations.length; i++) {
            if (locationResult.results[0].locations[i].adminArea1 === 'US') {
              locationSelect = i
              break
            }
          }
        }
        this.apiResults(locationResult,locationSelect,currentWeather)
        .then(currentResults => {
          if(typeof currentResults != 'undefined') {
            this.setState({
              inputs: [{
                ...this.state.inputs[idx], value: target.value, error: ''
              }],
              weather: currentResults.current,
              location: currentResults.results[0].locations[locationSelect]
            })
            target.blur();
          } else {
            error = `Location unknown try again`

            this.setState({
              inputs: [{
                ...this.state.inputs[idx], value: '', error
              }]
            })
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

  apiResults = (locationResults,locationSelect = 0,weatherResults) => {
    this.setState({ isLoading: false })
    return new Promise((resolve, reject) => {
      if(weatherResults == null || (locationResults.results[0].locations[locationSelect].adminArea3 === '' && locationResults.results[0].locations[locationSelect].adminArea5 === '')) {
        reject(new Error('Location unknown try again'))
      } else {
        const locationWeather = {...locationResults, ...weatherResults}
        resolve(locationWeather)
      }
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <main className={((typeof this.state.weather.temp != 'undefined') ? `app container-fluid py-3 ${WeatherCondition(this.state.weather.weather[0].main)}` : 'app centered container-fluid py-3')}>
        <div className="intro">
          <h1>Local Weather Widget</h1>
          <div className="form">
            {this.state.isLoading ? <div className="loader"><div className="pacman"><div></div><div></div><div></div><div></div><div></div></div></div> : ''}
            {this.state.inputs.map((input, idx) => (
              <div key={input.name.toLowerCase()} className="form-group form-group-search">
                <label className="sr-only" htmlFor={input.name.toLowerCase()}>{input.name}</label>
                <input type="text" name={input.name.toLowerCase()} className="form-control form-control-search" placeholder="Enter City, ST or State" value={input.value} onChange={(e) => this.searchInputChange(idx,e)} onKeyPress={(e) => this.searchSubmit(idx, e)} />
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
