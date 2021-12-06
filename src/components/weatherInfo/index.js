import React from 'react';
import './styles.css'

function WeatherInfo(props) {
  const { day, maxTemp, minTemp } = props;

  return (
    <div className="weather-info">
      <h4>{day}</h4>
      <div className="measure-section">
        <span className="max-temp">{maxTemp} °C</span>
        <span className="min-temp">{minTemp} °C</span>
      </div>
    </div>
  )
}

export default WeatherInfo;
