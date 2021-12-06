import React, { useState } from 'react';
import './styles.css';

import { Banner, DestinationForm, WeatherInfo } from '../../components';
const API_KEY = "a5a47c18197737e8eeca634cd6acb581";
const PART = "hourly, minutely";

function WeatherList() {
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState([]);

  const searchDestination = () => {
    fetch(`https://search.reservamos.mx/api/v2/places?q=${search}`)
   .then(response => response.json())
   .then(data => {
     const city = data.filter(result => result.result_type === 'city')[0]
     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=${PART}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setForecast(data);
      });
   });
  }

  const renderDayForcast = ({ daily = [] }) => {
    return daily.map(({ temp }) => {
      return (
        <WeatherInfo day="temperatura"  maxTemp={temp.max} minTemp={temp.min} />
      )
    })
  }

  const renderCity = (forecast) => {
    return (
      <div className="temperature-section">
          <div className="weather-title-section">
            <h2 className="weather-title">{search}</h2>
          </div>
          <div className="info-section">
          {renderDayForcast(forecast)}
          </div>
        </div>
    )
  }

  return (
    <div className="weather-list">
      <Banner title="Consultar clima en destino" />
      <div className="weather-content">
        <div>
          <DestinationForm setSearch={setSearch} searchDestination={searchDestination}/>
        </div>
        {renderCity(forecast)}
      </div> 
    </div>
  );
}

export default WeatherList;
