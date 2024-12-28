/* eslint-disable react/prop-types */
import "./TempDays.css";

function TempDays({ tempDays }) {
  let tempDaily = {};

  for (let days of tempDays.list) {
    const date = new Date(days.dt * 1000).toLocaleDateString();
    if (!tempDaily[date]) {
      tempDaily[date] = days;
    }
  }

  const nextDays = Object.values(tempDaily).slice(1, 6);

  function  converteDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: "short", day: '2-digit'})
    
    return newDate;
  }

  return (
    <div className="temp-container">
      <p className="temp-text">Previsão dos próximos 5 dias</p>
      <div className="temp-list">
      {nextDays.map((days) => (
        <div className="context-item" key={days.index}>
          <p>{converteDate(days)}</p>
          <img
            src={`https://openweathermap.org/img/wn/${days.weather[0].icon}.png`}
            alt={days.weather[0].description}
          />
          <p className="infos">{days.weather[0].description}</p>
          <p className="infos">
            {days.main.temp_min.toFixed(0)}
            <sup>°C</sup> min / {days.main.temp_max.toFixed(0)}
            <sup>°C</sup> máx
          </p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default TempDays;
