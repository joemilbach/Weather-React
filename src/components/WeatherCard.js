import React from "react";
import WeatherCondition from "./WeatherCondition";
import WeatherIcon from "./WeatherIcon";
import DateBuilder from "./DateBuilder";

const WeatherCard = (props) => {
  return (
    (typeof props.weather.temp != 'undefined') ? (
    <div className="card card-weather">
      {DateBuilder(new Date())}
      <div className="card-icn mt-auto">
        <WeatherIcon>{WeatherCondition(props.weather.weather[0].main)}</WeatherIcon>
        <h3 className="card-icn-label">
          {Math.round(props.weather.temp)}°C
        </h3>
        <p className="card-subtitle">
          {props.weather.weather[0].description}
        </p>
      </div>
      <p className="card-location mt-auto">
        {((props.location.adminArea5 !== '') ? `${props.location.adminArea5},` : '')}{((props.location.adminArea1 !== 'US') ? ` ${props.location.adminArea1}` : ` ${props.location.adminArea3}`)}
      </p>
    </div>
    ) : ('')
  )
}

export default WeatherCard;
