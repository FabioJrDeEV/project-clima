import { useRef, useState } from "react";
import axios from 'axios'
import './App.css'
import TempInfo from "./components/tempinfo/TempInfo";
import TempDays from "./components/days/TempDays";
import Loader from "./components/loader/Loader";

function App() {
  const [temp, setTemp] = useState();
  const [tempDays, setTempDays] = useState();
  const [loading, setLoading] = useState(false)
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "6ab200a719525cc445a46434d3726c19"
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    setLoading(true);

    try {  
      const requestAPi = await axios.get(api);  
      const requestApiDays = await axios.get(apiDays);  
      setTemp(requestAPi.data);  
      setTempDays(requestApiDays.data);  
    } catch (error) {  
      console.error("Erro ao buscar dados da api", error);  
    } finally {  
      setLoading(false); 
    }  
  }

  return (
    <div className="app">
      <h1>Previsão do tempo</h1>
      <div className="render-input">
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button type="submit" onClick={() => searchCity()}>Buscar</button>
      </div>
      {loading && <Loader />}
      {temp && <TempInfo weather={temp} />}
      {tempDays && <TempDays tempDays={tempDays} />}
    </div>
  );
}

export default App;
