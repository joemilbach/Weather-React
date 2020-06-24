import React from "react";
import { ReactComponent as CloudySvg } from "../assets/Weather_ICN-Cloudy.svg"
import { ReactComponent as PartlyCloudySvg } from "../assets/Weather_ICN-Partly-Cloudy.svg"
import { ReactComponent as RainySvg } from "../assets/Weather_ICN-Rainy.svg"
import { ReactComponent as SnowySvg } from "../assets/Weather_ICN-Snowy.svg"
import { ReactComponent as StormySvg } from "../assets/Weather_ICN-Stormy.svg"
import { ReactComponent as SunnySvg } from "../assets/Weather_ICN-Sunny.svg"

const WeatherIcon = (props) => {
    switch (props.children)
    {
      case 'partly-cloudy':
        return <PartlyCloudySvg />
      case 'stormy':
        return <StormySvg />
      case 'rainy':
        return  <RainySvg />
      case 'cloudy':
        return <CloudySvg />
      case 'snowy':
        return <SnowySvg />
      default:
        return <SunnySvg />
    }
}

export default WeatherIcon
