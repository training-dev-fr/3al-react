import { useEffect, useState } from 'react';
import './Weather.css';

export default function Weather(){
    const [weather,setWeather] = useState(null);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=50.71798634836656&lon=3.1583013359382224&appid=55d80056ec5dfe2ab7c017eb130631b4")
        .then(result => result.json())
        .then(data => {
            setWeather(data)
        })
    },[]);
    
    return(
        <div className='weather'>
            <span className="city">{weather?.name}</span>
            <span className="current">{weather?.weather[0]?.description}</span>
        </div>
    )
}