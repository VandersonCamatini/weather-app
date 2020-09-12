/*
  - Normally i use ESlint, Prettier, and other tools to organizate my code, but in this case,  i didn't use, trying to pass my identations skills.
  - I am currently studying the tecnologies used in this code, and i'm really loving Typescript, the scalability, organanization and intellisense, that he brings to the code is amazing.  
  - I tried to use the React hooks in the best way possible with my current knowledge, simple and functional.
  - 
*/
import React, { useState, useEffect, useRef } from 'react';
import { getWeather } from "./services/weatherApi";

import GlobalStyle from "./styles/global";
import { 
  MainContainer, 
  WeatherView,
  LocationInfo,
  WeatherInfos,
  TemperatureButtons,
} from "./styles/app";

import WeatherResponse from './interfaces/WeatherResponse';

const App: React.FC = () => {

  const [queryString, setQueryString] = useState('' );
  const [weather, setWeather] = useState<WeatherResponse>();
  const [temperature, setTemperature] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);

  // Calling the API service to get the weather data.
  const searchWeatherData = async () => {
    const weatherData = await getWeather(queryString);
    setWeather(weatherData);
    setQueryString('');
  }

  // Normally i create handle functions to associate a events, submits, etc.
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === 'Enter'){
      setQueryString(inputRef?.current?.value || '');
    }
  }

  // Setting the first values, to feed the application.
  useEffect(() => {
    setQueryString('Tijucas')
    setTemperature('C');
  }, [])

  // Everytime the queryString value changes, i call the hook. 
  useEffect(() =>{
    if(queryString){
      searchWeatherData();
    }
  }, [queryString])


  // Using the components of styled components
  return (
    <>
      <MainContainer>
        <input 
          ref={inputRef}
          type="text"  
          placeholder="Pass US Zipcode, UK Postcode, IP address, Latitude/Longitude (decimal degree) or city name..."
          onKeyPress={handleSearch}
          style={{width: '700px'}}
        />
        <WeatherView>
          <LocationInfo> 
            {
              //  Here i'm using Commom validation strategy, have other and better ways to validate.
              weather && weather.current ?
              (
                <>
                  <p>{weather.location.name}, {weather.location.region}, {weather.location.country}</p>
                  <p>{weather.current.condition.text}</p>
                </>
              )
              :
              (
                <p></p>
              )
            }
            <WeatherInfos>
              {
                weather && weather.current && weather.current.condition ?
                (
                  <>
                    <img src={weather.current.condition.icon} alt={weather.current.condition.text}/>
                    <p id="temperature">
                      { 
                          (weather && weather.current && temperature && temperature === 'C') 
                        ? 
                          weather.current.temp_c : weather.current.temp_f 
                      }
                    </p>
                    <TemperatureButtons>
                      <a 
                        onClick={() => setTemperature('C') } 
                        style={temperature && temperature === 'C' ? {color: "blue"} : {}}
                      >
                        C°
                      </a>
                      <p>|</p>
                      <a 
                        onClick={() => setTemperature('F') }
                        style={temperature && temperature === 'F' ? {color: "blue"} : {}}
                      >
                        F°
                      </a>
                    </TemperatureButtons>
                    <div>
                      <p>Humidity: {weather.current.humidity}%</p>
                      <p>Wind: 
                        { 
                          (weather && weather.current && temperature && temperature === 'C') 
                        ? 
                          `${weather.current.wind_kph} KPH`  : `${weather.current.wind_mph} MPH` 
                        }
                      </p>
                      <p>Cloud: {weather.current.cloud}%</p>
                      <p>
                        Feels like: { 
                          (weather && weather.current && temperature && temperature === 'C') 
                        ? 
                          weather.current.feelslike_c : weather.current.feelslike_f
                      }°
                      </p>
                    </div>
                  </>
                )
                :
                (
                  <div></div>
                )
              }
            </WeatherInfos>
          </LocationInfo>
          <WeatherInfos/>
        </WeatherView>
      </MainContainer>
      <GlobalStyle/>
    </>

  );
}
  

export default App;

// That's it. I know there is still a lot to improve, and my goal is to be better today, than I was yesterday.
