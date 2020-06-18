import theme from "./theme";

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

export default weatherCondition;