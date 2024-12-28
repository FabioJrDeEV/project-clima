import "./TempInfo.css";

/* eslint-disable react/prop-types */
function TempInfo({ weather }) {
  return (
    <div className="temp-container">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="temp-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
        <p className="temperature">
          {weather.main.temp.toFixed(0)}
          <sup>°C </sup>
        </p>
      </div>
      <p className="description">{weather.weather[0].description}</p>
      <div className="temp-details">
          <p>
            Sensação termina: {weather.main.feels_like.toFixed(0)}
            <sup>°C</sup>
          </p>
          <p>Umidade: {weather.main.humidity}%</p>
          <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default TempInfo;
