import React from "react";

const api = {
  weatherKey: "faefd155e08c7c2328051dba4988037a",
  weatherBaseUrl: "http://api.openweathermap.org/data/2.5/weather",
  mapKey: "UvcuDMEcFhYpPlaDyTcm8ZHBbQTXAAOt",
  mapBaseUrl: "http://open.mapquestapi.com/geocoding/v1/reverse"
}

const theme = {
  partlyCloudy: {
    class: 'partly-cloudy',
    icon: '<path d="M68.47,43.11a13.65,13.65,0,0,0-2.57.24,20.08,20.08,0,0,0-35.57-4.22,15.63,15.63,0,0,0-13,9.77h-.21a10.72,10.72,0,0,0,0,21.43H68.47a13.61,13.61,0,0,0,0-27.22Z" fill="#fff"/><path d="M23.33,16.7c.6,0,1.08-5.93,1.08-6.75s-.48-2.27-1.08-2.27S22.25,9.12,22.25,10,22.73,16.7,23.33,16.7Z" fill="#fff"/><path d="M39,16.88c.58-.59,1.26-1.95.84-2.37s-1.78.26-2.37.84-4.43,5.12-4,5.54S38.4,17.46,39,16.88Z" fill="#fff"/><path d="M18.36,42.12a17.91,17.91,0,0,1,2.23-2,17.27,17.27,0,0,1,8-3.36,21.7,21.7,0,0,1,6.92-6.21,12.17,12.17,0,1,0-17.13,11.6Z" fill="#fff"/><path d="M7.67,45.14c-.58.59-1.26,2-.84,2.37s1.78-.26,2.37-.84,4.43-5.12,4-5.54S8.26,44.56,7.67,45.14Z" fill="#fff"/><path d="M13.21,20.89c.42-.42-3.43-5-4-5.54s-1.95-1.26-2.37-.84.26,1.78.84,2.37S12.79,21.31,13.21,20.89Z" fill="#fff"/><path d="M9,31c0-.59-5.93-1.08-6.76-1.08S0,30.42,0,31s1.44,1.08,2.26,1.08S9,31.61,9,31Z" fill="#fff"/>'
  },
  stormy: {
    class: 'stormy',
    icon: '<polygon points="47.61 26.93 29 44.67 39.87 44.81 25.91 68.63 52.97 39.64 42.84 39.64 47.61 26.93" fill="#fff"/><path d="M63.5,20.56a12.45,12.45,0,0,0-2.3.21A17.92,17.92,0,0,0,29.47,17a14,14,0,0,0-11.58,8.72h-.18a9.56,9.56,0,1,0,0,19.12h8.16L52.54,19.65,46.28,37.47H58l-6.88,7.37H63.5a12.14,12.14,0,0,0,0-24.28Z" fill="#fff"/>'
  },
  rainy: {
    class: 'rainy',
    icon: '<path d="M61.49,16.26a11,11,0,0,0-2.08.2A16.25,16.25,0,0,0,30.62,13,12.67,12.67,0,0,0,20.12,21H20a8.68,8.68,0,0,0,0,17.35H61.49a11,11,0,0,0,0-22Z" fill="#fff"/><path d="M49.09,65.77c.32-.81,2.07-3.85,2.65-3.62s-.22,3.64-.54,4.45S50.11,68,49.53,67.74,48.77,66.57,49.09,65.77Z" fill="#fff"/><path d="M53.33,55.05c.31-.81,2.06-3.84,2.64-3.61s-.22,3.64-.54,4.44S54.35,57.25,53.76,57,53,55.86,53.33,55.05Z" fill="#fff"/><path d="M57.56,44.34c.32-.81,2.06-3.85,2.64-3.62s-.22,3.64-.54,4.45S58.58,46.54,58,46.31,57.24,45.14,57.56,44.34Z" fill="#fff"/><path d="M41.24,69.83c.32-.8,2.06-3.84,2.65-3.61s-.22,3.64-.54,4.45S42.26,72,41.68,71.81,40.92,70.64,41.24,69.83Z" fill="#fff"/><path d="M45.47,59.12c.32-.81,2.07-3.84,2.65-3.62s-.22,3.64-.54,4.45-1.09,1.37-1.67,1.14S45.15,59.93,45.47,59.12Z" fill="#fff"/><path d="M49.71,48.41c.31-.81,2.06-3.85,2.64-3.62s-.22,3.64-.54,4.45-1.09,1.37-1.67,1.14S49.39,49.21,49.71,48.41Z" fill="#fff"/><path d="M36,65.77c.32-.81,2.06-3.85,2.65-3.62s-.23,3.64-.54,4.45S37,68,36.45,67.74,35.69,66.57,36,65.77Z" fill="#fff"/><path d="M40.24,55.05c.32-.81,2.07-3.84,2.65-3.61s-.22,3.64-.54,4.44S41.26,57.25,40.68,57,39.92,55.86,40.24,55.05Z" fill="#fff"/><path d="M44.47,44.34c.32-.81,2.07-3.85,2.65-3.62s-.22,3.64-.54,4.45-1.09,1.37-1.67,1.14S44.16,45.14,44.47,44.34Z" fill="#fff"/><path d="M28.16,69.83c.32-.8,2.06-3.84,2.64-3.61s-.22,3.64-.54,4.45S29.18,72,28.6,71.81,27.84,70.64,28.16,69.83Z" fill="#fff"/><path d="M32.39,59.12c.32-.81,2.06-3.84,2.65-3.62s-.23,3.64-.54,4.45-1.09,1.37-1.67,1.14S32.07,59.93,32.39,59.12Z" fill="#fff"/><path d="M36.62,48.41c.32-.81,2.07-3.85,2.65-3.62s-.22,3.64-.54,4.45-1.09,1.37-1.67,1.14S36.3,49.21,36.62,48.41Z" fill="#fff"/><path d="M22.93,65.77c.32-.81,2.06-3.85,2.64-3.62s-.22,3.64-.54,4.45S24,68,23.37,67.74,22.61,66.57,22.93,65.77Z" fill="#fff"/><path d="M27.16,55.05c.32-.81,2.06-3.84,2.64-3.61s-.22,3.64-.53,4.44S28.18,57.25,27.6,57,26.84,55.86,27.16,55.05Z" fill="#fff"/><path d="M31.39,44.34c.32-.81,2.07-3.85,2.65-3.62s-.22,3.64-.54,4.45-1.09,1.37-1.67,1.14S31.07,45.14,31.39,44.34Z" fill="#fff"/><path d="M15.07,69.83c.32-.8,2.07-3.84,2.65-3.61s-.22,3.64-.54,4.45S16.09,72,15.51,71.81,14.76,70.64,15.07,69.83Z" fill="#fff"/><path d="M19.31,59.12c.32-.81,2.06-3.84,2.64-3.62s-.22,3.64-.54,4.45-1.08,1.37-1.66,1.14S19,59.93,19.31,59.12Z" fill="#fff"/><path d="M23.54,48.41c.32-.81,2.06-3.85,2.64-3.62s-.22,3.64-.54,4.45S24.56,50.61,24,50.38,23.22,49.21,23.54,48.41Z" fill="#fff"/>'
  },
  cloudy: {
    class: 'cloudy',
    icon: '<path d="M62.64,32.45a12.35,12.35,0,0,0-2.29.22A17.92,17.92,0,0,0,28.61,28.9,14,14,0,0,0,17,37.62h-.18a9.56,9.56,0,0,0,0,19.12H62.64a12.15,12.15,0,1,0,0-24.29Z" fill="#fff"/>'
  },
  snowy: {
    class: 'snowy',
    icon: '<path d="M66.74,50.85c-.84-.49-3.07-1.72-5.92-3.25a58.85,58.85,0,0,0,6.53-1c1-.27,2.65-1.34,2.46-2.09s-2.14-.88-3.17-.61a50.26,50.26,0,0,0-7.34,2.9c-2.41-1.28-5.13-2.71-7.77-4a29.82,29.82,0,0,0,4.68-.51c.71-.19,1.8-1.12,1.61-1.87s-1.61-1-2.32-.84-4.43,1.65-5.31,2.53c-2.46-1.24-4.78-2.38-6.63-3.22,1.85-.85,4.17-2,6.63-3.23.88.88,4.69,2.36,5.31,2.53s2.12-.09,2.32-.84-.9-1.68-1.61-1.87a29.82,29.82,0,0,0-4.68-.51c2.64-1.34,5.36-2.77,7.77-4a50.26,50.26,0,0,0,7.34,2.9c1,.27,3,.14,3.17-.61s-1.43-1.82-2.46-2.09a58.85,58.85,0,0,0-6.53-1c2.85-1.53,5.08-2.76,5.92-3.25,3.21-1.87,3.7-3.27,3.1-4.29s-2-1.28-5.26.59c-.84.49-3,1.83-5.73,3.56a60.3,60.3,0,0,0,2.32-6.19c.27-1,.14-3-.61-3.16s-1.82,1.43-2.09,2.45a50.23,50.23,0,0,0-1.08,7.82c-2.3,1.48-4.88,3.14-7.35,4.78A29.41,29.41,0,0,0,51.9,28c.18-.71-.09-2.12-.84-2.31s-1.68.89-1.87,1.6-.74,4.67-.41,5.87c-2.28,1.52-4.4,3-6,4.17.2-2,.38-4.59.55-7.32,1.2-.32,4.41-2.86,4.86-3.32s1-1.87.45-2.42-1.9-.08-2.43.45a29.08,29.08,0,0,0-2.8,3.78c.17-3,.31-6,.42-8.76A50,50,0,0,0,50,14.9c.75-.75,1.61-2.5,1.07-3s-2.3.32-3,1.07a61.75,61.75,0,0,0-4.17,5.12c.12-3.23.19-5.77.19-6.75,0-3.71-1-4.83-2.14-4.83s-2.15,1.12-2.15,4.83c0,1,.07,3.52.19,6.75a61.75,61.75,0,0,0-4.17-5.12c-.75-.75-2.5-1.62-3.05-1.07s.32,2.29,1.07,3A50,50,0,0,0,40,19.77c.11,2.74.25,5.8.42,8.76a29.08,29.08,0,0,0-2.8-3.78c-.53-.53-1.88-1-2.43-.45s-.07,1.9.45,2.42,3.66,3,4.86,3.32c.17,2.73.35,5.3.55,7.32-1.64-1.19-3.76-2.65-6-4.17.33-1.2-.25-5.25-.41-5.87s-1.12-1.8-1.87-1.6-1,1.6-.84,2.31a29.41,29.41,0,0,0,1.86,4.33c-2.47-1.64-5.05-3.3-7.35-4.78a50.23,50.23,0,0,0-1.08-7.82c-.27-1-1.34-2.65-2.09-2.45s-.88,2.14-.61,3.16A58.6,58.6,0,0,0,25,26.66c-2.73-1.73-4.9-3.07-5.74-3.56C16,21.23,14.55,21.49,14,22.51s-.11,2.42,3.1,4.29c.84.49,3.07,1.72,5.92,3.25a58.85,58.85,0,0,0-6.53,1c-1,.27-2.65,1.34-2.46,2.09s2.14.88,3.17.61a50.26,50.26,0,0,0,7.34-2.9c2.41,1.28,5.13,2.71,7.77,4a29.82,29.82,0,0,0-4.68.51c-.71.19-1.8,1.12-1.61,1.87s1.61,1,2.32.84,4.43-1.65,5.31-2.53c2.46,1.24,4.78,2.38,6.63,3.23-1.85.84-4.17,2-6.63,3.22-.88-.88-4.69-2.36-5.31-2.53s-2.12.09-2.32.84.9,1.68,1.61,1.87a29.82,29.82,0,0,0,4.68.51c-2.64,1.34-5.36,2.77-7.77,4a50.26,50.26,0,0,0-7.34-2.9c-1-.27-3-.14-3.17.61s1.43,1.82,2.46,2.09a58.85,58.85,0,0,0,6.53,1c-2.85,1.53-5.08,2.76-5.92,3.25-3.21,1.87-3.7,3.27-3.1,4.29s2.05,1.28,5.26-.59c.84-.49,3-1.83,5.74-3.56a58.6,58.6,0,0,0-2.33,6.19c-.27,1-.14,3,.61,3.16s1.82-1.43,2.09-2.45a50.23,50.23,0,0,0,1.08-7.82c2.3-1.48,4.88-3.14,7.35-4.78a29.41,29.41,0,0,0-1.86,4.33c-.18.71.09,2.12.84,2.31s1.68-.89,1.87-1.6.74-4.67.41-5.87c2.28-1.52,4.4-3,6-4.17-.2,2-.38,4.59-.55,7.32-1.2.32-4.41,2.86-4.86,3.32s-1,1.87-.45,2.42,1.9.08,2.43-.45a29.08,29.08,0,0,0,2.8-3.78c-.17,3-.31,6-.42,8.76a50,50,0,0,0-6.21,4.87c-.75.75-1.61,2.5-1.07,3s2.3-.32,3.05-1.07a61.75,61.75,0,0,0,4.17-5.12c-.12,3.23-.19,5.77-.19,6.75,0,3.71,1,4.83,2.15,4.83S44,70.06,44,66.35c0-1-.07-3.52-.19-6.75A61.75,61.75,0,0,0,48,64.72c.75.75,2.5,1.62,3,1.07s-.32-2.29-1.07-3a50,50,0,0,0-6.21-4.87c-.11-2.74-.25-5.8-.42-8.76a29.08,29.08,0,0,0,2.8,3.78c.53.53,1.88,1,2.43.45s.07-1.9-.45-2.42-3.66-3-4.86-3.32c-.17-2.73-.35-5.3-.55-7.32,1.64,1.19,3.76,2.65,6,4.17-.33,1.2.25,5.25.41,5.87s1.12,1.8,1.87,1.6,1-1.6.84-2.31A29.41,29.41,0,0,0,50,45.29c2.47,1.64,5.05,3.3,7.35,4.78a50.23,50.23,0,0,0,1.08,7.82c.27,1,1.34,2.65,2.09,2.45s.88-2.14.61-3.16A60.3,60.3,0,0,0,58.85,51c2.72,1.73,4.89,3.07,5.73,3.56,3.21,1.87,4.66,1.61,5.26.59S70,52.72,66.74,50.85Z" fill="#fff"/>'
  },
  sunny: {
    class: 'sunny',
    icon: '<circle cx="41.59" cy="38.83" r="20.25" fill="#fff"/><path d="M43.39,3.77c0,1.37-.81,11.23-1.8,11.23S39.8,5.14,39.8,3.77,40.6,0,41.59,0,43.39,2.4,43.39,3.77Z" fill="#fff"/><path d="M39.8,73.88c0-1.37.8-11.23,1.79-11.23s1.8,9.86,1.8,11.23-.81,3.77-1.8,3.77S39.8,75.26,39.8,73.88Z" fill="#fff"/><path d="M76.65,40.62c-1.37,0-11.23-.8-11.23-1.79S75.28,37,76.65,37s3.77.81,3.77,1.8S78,40.62,76.65,40.62Z" fill="#fff"/><path d="M6.54,37c1.37,0,11.23.81,11.23,1.8S7.91,40.62,6.54,40.62s-3.77-.8-3.77-1.79S5.16,37,6.54,37Z" fill="#fff"/><path d="M67.65,15.31c-1,1-8.51,7.37-9.21,6.67s5.7-8.24,6.68-9.21,3.23-2.1,3.93-1.4S68.62,14.33,67.65,15.31Z" fill="#fff"/><path d="M15.54,62.35c1-1,8.51-7.38,9.21-6.68S19,63.91,18.07,64.88s-3.23,2.1-3.93,1.4S14.56,63.32,15.54,62.35Z" fill="#fff"/><path d="M65.12,64.88c-1-1-7.38-8.51-6.68-9.21s8.24,5.71,9.21,6.68,2.1,3.23,1.4,3.93S66.09,65.86,65.12,64.88Z" fill="#fff"/><path d="M18.07,12.77c1,1,7.38,8.51,6.68,9.21s-8.24-5.7-9.21-6.67-2.1-3.24-1.4-3.94S17.1,11.8,18.07,12.77Z" fill="#fff"/>'
  }
}

const decodeHTML = html => {
  const rawHTML ={__html: html}
  return <svg className="card-icn-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.08 77.65" dangerouslySetInnerHTML={rawHTML} />
}

const dateBuilder = d => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const day = days[d.getDay()]
  const date = d.getDate()
  const month = months[d.getMonth()]
  const year = d.getFullYear()

  return <div className="card-date"><span className="text-display">{day}</span> {date} {month} {year}</div>
}

const weatherCondition = (condition,icon = false) => {
  switch (condition)
  {
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
      return ((icon) ? theme.partlyCloudy.icon : theme.partlyCloudy.class)
    case 'Thunderstorm':
    case 'Tornado':
      return ((icon) ? theme.stormy.icon : theme.stormy.class)
    case 'Drizzle':
    case 'Rain':
      return ((icon) ? theme.rainy.icon : theme.rainy.class)
    case 'Clouds':
      return ((icon) ? theme.cloudy.icon : theme.cloudy.class)
    case 'Snow':
      return ((icon) ? theme.snowy.icon : theme.snowy.class)
    default:
      return ((icon) ? theme.sunny.icon : theme.sunny.class)
  }
}

class WeatherSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initialState
    this.searchInputChange = this.searchInputChange.bind(this)
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

    if(!response.ok) {
      error = `Error ${response.statusText}`

      this.setState({
        inputs: [{
          ...this.state.inputs[idx],
            value: '',
            error
        }]
      });

      throw new Error(`${response.status} (${response.statusText})`)
    } else {
      return response.json()
    }
  }

  searchSubmit = (idx,event) => {
    const target = event.target
    let apiCall = ''

    if (event.key === "Enter") {
      if (isNaN(target.value)) {
        apiCall = `${api.weatherBaseUrl}?q=${encodeURIComponent(target.value)}&units=imperial&appid=${api.weatherKey}`
      } else {
        apiCall = `${api.weatherBaseUrl}?zip=${target.value}&units=imperial&appid=${api.weatherKey}`
      }
      fetch(apiCall)
      .then(response => this.apiErrorHandling(response,idx))
      .then(result => {
        this.setState({
          weather: result
        })
        this.weatherLocation(result.coord.lat,result.coord.lon,target,idx)
        target.blur();
      })
      .catch((error) => console.log('Fetch error:', error.message))
    }
  }

  weatherLocation = (lat,lon,idx) => {
    fetch(`${api.mapBaseUrl}?key=${api.mapKey}&location=${lat},${lon}`)
    .then(response => this.apiErrorHandling(response,idx))
    .then(result => {
      this.setState({
        location: result.results[0].locations[0]
      })
    })
  }

  render() {
    return (
      <main className={((typeof this.state.weather.main != "undefined") ? `app container-fluid py-3 ${weatherCondition(this.state.weather.weather[0].main)}` : 'app centered container-fluid py-3')}>
        <div className="intro">
          <h1>Local Weather Widget</h1>
          <div className="form">
            {this.state.inputs.map((input, idx) => (
              <div key={input.name.toLowerCase()} className="form-group form-group-search">
                <label className="sr-only" htmlFor={input.name.toLowerCase()}>{input.name}</label>
                <input type="text" name={input.name.toLowerCase()} className="form-control form-control-search" placeholder="Enter zipcode or city name" value={input.value} onChange={(e) => this.searchInputChange(idx, e)} onKeyPress={(e) => this.searchSubmit(idx, e)}/>
                {input.error && <div className="invalid-feedback">{input.error}</div>}
                {input.value && <button type="button" className="btn btn-reset" onClick={this.clearSearch}><span className="sr-only">Reset</span></button>}
              </div>
            ))}
          </div>
        </div>
        {(typeof this.state.weather.main != "undefined") ? (
        <div className="card card-weather">
          {dateBuilder(new Date())}
          <div className="card-icn mt-auto">
            {decodeHTML(weatherCondition(this.state.weather.weather[0].main,true))}
            <h3 className="card-icn-label">
              {Math.round(this.state.weather.main.temp)}°C
            </h3>
            <p className="card-subtitle">
              {this.state.weather.weather[0].description}
            </p>
          </div>
          <p className="card-location mt-auto">
            {((this.state.location.adminArea5 !== '') ? `${this.state.location.adminArea5},` : '')} {this.state.location.adminArea3}
          </p>
        </div>
        ) : ('')}
      </main>
    );
  }
}

function App() {
  return (
    <WeatherSearch />
  );
}

export default App;