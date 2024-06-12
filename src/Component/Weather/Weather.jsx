import { useEffect, useState } from 'react';
import './Weather.css';

export default function Weather(){
    const [weather,setWeather] = useState({weather:[]});

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Lille&appid=55d80056ec5dfe2ab7c017eb130631b4")
        .then(result => result.json())
        .then(data => {
            setWeather(data)
        })
    },[]);

    return(
        <div className='weather'>
            <span className="city">{weather?.name}</span>
            <span className="current">{weather.weather && weather?.weather[0]?.description}</span>
        </div>
    )
}