import React ,{useEffect} from 'react';
import "./Style.css"

const WeatherCard = ({ weartherData , setWeartherState,weartherState}) => {
    const {
        temp,
        humidity,
        pressure,
        feels_like,
        weartherMood,
        name,
        speed,
        country,
        sunrise,
        sunset
    } = weartherData;

    useEffect(()=>{
        if (weartherMood) {
            switch (weartherMood) {
                case "Haze":
                    setWeartherState("wi-day-haze")
                    break;
                case "Clear":
                    setWeartherState("wi-day-sunny")
                    break;
                case "Rain":
                    setWeartherState("wi-day-rain-mix")
                    break;
                case "Sunny":
                    setWeartherState("wi-day-Sunny")
                    break;
            
                case "Clouds":
                    setWeartherState("wi-day-cloudy")
                    break;
                case "Dust":
                    setWeartherState("wi-dust")
                    break;
                case "Mist":
                    setWeartherState("wi-day-fog")
                    break;
            
                default:
                    setWeartherState("wi-day-Sunny")
                    break;
            }
        }
    },[weartherMood])


    // convarting
    let sunsett = new Date(sunset * 1000)
    let sunsetTime = `${sunsett.getHours()}: ${sunsett.getMinutes()}`
    let time = new Date(sunrise * 1000)
    let sunriseTime = `${time.getHours()}: ${time.getMinutes()}`
    return (
        <>
            <div className="main-card">
                <div className="wearther-icon">
                    <i className={`wi ${weartherState}`}></i>
                    <p> {name}</p>
                </div>
                <div className="wearther-info">
                    <div className="temprature">
                        <p>{Math.round(temp)}&deg;C</p>
                        <p className='pra'>Feels like {Math.round(feels_like)}&deg;C </p>
                    </div>
                    <div className="description">
                        <div className="weather-condition">
                         {weartherMood}
                        </div>
                        <div className="place">
                            {name} , {country}
                        </div>
                    </div>
                    <div className="date">
                        {new Date().toLocaleString()}
                    </div>
                    {/* 4 colum section */}

                    <div className="extra-tem">
                        <div className="tow-side">
                            <div className="first-side">
                                <i className='wi wi-sunrise'></i>
                            </div>
                            <div className="second-side">
                                <p>{sunriseTime}</p>
                                <p>Sunrise</p>
                            </div>
                        </div>
                        <div className="tow-side">
                            <div className="first-side">
                                <i className='wi wi-sunset'></i>
                            </div>
                            <div className="second-side">
                                <p>{sunsetTime}</p>
                                <p>Sunset</p>
                            </div>
                        </div>
                        <div className="tow-side">
                            <div className="first-side">
                                <i className='wi wi-humidity'></i>
                            </div>
                            <div className="second-side">
                                <p>{humidity}%</p>
                                <p>humidity</p>
                            </div>
                        </div>
                        <div className="tow-side">
                            <div className="first-side">
                                <i className='wi wi-strong-wind'></i>
                            </div>
                            <div className="second-side">
                                <p>{speed}KM/H</p>
                                <p>Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard
