import React, { useEffect, useState } from 'react';
import "./Style.css"
import WeatherCard from './WeatherCard';

const Temperature = () => {
  const [searchValue, setSearchValue] = useState("falakata");
  const [weartherData, setWeartherData] = useState({});
  const [ weartherState,setWeartherState] = useState('');


  const searchLocation = (e) => {
    setSearchValue(e.target.value);
  }

  const getWeatherReport = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=bc668d80501661c5efe4a3e6c898fb19`;
      // let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid={API key}`
      const respons = await fetch(url);
      const data = await respons.json()
      const { temp, humidity, pressure, } = data.main;
      const { main: weartherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunrise, sunset } = data.sys;

      const myData = {
        temp,
        humidity,
        pressure,
        weartherMood,
        name,
        speed,
        country,
        sunrise,
        sunset
      }
      setWeartherData(myData);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getWeatherReport();
  }, []);
  return (
    <>
      <div className="full-container">
        <div className="container">
          <div className="scarch">
            <input type="scarch" placeholder='Scarch....' autoFocus name="" id="scarch-bar" value={searchValue} onChange={searchLocation} />
            <button type="button" className='search-button' onClick={getWeatherReport}>Scarch</button>
          </div>
        </div>
        <WeatherCard weartherData={weartherData} setWeartherState ={setWeartherState} weartherState={weartherState}/>
      </div>

    </>
  )
}

export default Temperature;
