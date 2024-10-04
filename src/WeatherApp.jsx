import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Kolkata",
        feelslike: 36.97,
        humidity: 84,
        temp: 29.97,
        tempMax: 29.97,
        tempMin: 29.97,
        weather: "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(<div style={{textAlign: "center" }}>
        <h2>Weather Widget By Raj</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>)
}