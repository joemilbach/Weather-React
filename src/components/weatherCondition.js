const weatherCondition = (condition) => {
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
      return `partly-cloudy`
    case 'Thunderstorm':
    case 'Tornado':
      return `stormy`
    case 'Drizzle':
    case 'Rain':
      return `rainy`
    case 'Clouds':
      return `cloudy`
    case 'Snow':
      return `snowy`
    default:
      return `sunny`
  }
}

export default weatherCondition;