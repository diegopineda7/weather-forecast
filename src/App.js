import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import CitiesWeather from './components/CitiesWeather';
import DaysForecast from './components/DaysForecast';
import FixedCurrent from './components/FixedCurrent';
import PlaceVisit from './components/PlaceVisit';
import { getCurrentWeather, getWeatherForecast } from './services';
import './styles/styles.css';

function App() {
  const [bogotaForecast, setBogotaForecast] = useState(undefined)
  const [bogotaWeather, setBogotaWeather] = useState(undefined)
  const [parisWeather, setParisWeather] = useState(undefined)
  const [cityWeather, setCityWeather] = useState(undefined)

  useEffect(() => {
    loadWeather()
  }, [])

  const loadWeather = async () => {
    getWeatherForecast('bogota', setBogotaForecast)
    getCurrentWeather('bogota', setBogotaWeather)
    getCurrentWeather('paris', setParisWeather)
    getCurrentWeather('lyon', setCityWeather)
  }

  return (
    <>
      {
        bogotaWeather && parisWeather && cityWeather &&
        <>
          <FixedCurrent
            icon={bogotaWeather.weather[0].icon}
            temp={bogotaWeather.main.temp}
            weather={bogotaWeather.weather[0].main}
          />
          <div className='app'>
            <Banner cityName={bogotaWeather.name} />
            <div className='app__secondary'>
              <DaysForecast forecast={bogotaForecast} />
              <PlaceVisit
                place1='Arab Street'
                place2='Art Science Museum'
                place3='Fountain of Wealth'
                city='Singapore'
              />
              <CitiesWeather
                paris={parisWeather}
                city={cityWeather}
              />
            </div>
          </div>
        </>
      }
    </>
  )
}

export default App;
