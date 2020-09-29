import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import CitiesWeather from './components/CitiesWeather';
import DaysForecast from './components/DaysForecast';
import FixedCurrent from './components/FixedCurrent';
import PlaceVisit from './components/PlaceVisit';
import { getCurrentWeather, getWeatherForecast } from './services';
import './styles/styles.css';

function App() {
  const [mainCity, setMainCity] = useState('')
  const [mainCityWeather, setMainCityWeather] = useState({})
  const [parisWeather, setParisWeather] = useState({})
  const [cityWeather, setCityWeather] = useState({})

  useEffect(() => {
    _loadWeather()
  }, [])

  const _loadWeather = () => {
    const mainResult = getWeatherForecast('bogota')
    const parisResult = getCurrentWeather('paris')
    const cityResult = getCurrentWeather('madrid')
    setMainCity(mainResult.city.name)
    setMainCityWeather(mainResult)
    setParisWeather(parisResult)
    setCityWeather(cityResult)
  }

  return (
    <>
      <FixedCurrent />
      <div className='app'>
        <Banner cityName={mainCity} />
        <div className='app__secondary'>
          <DaysForecast />
          <PlaceVisit />
          <CitiesWeather
            paris={parisWeather}
            city={cityWeather}
          />
        </div>
      </div>
    </>
  )
}

export default App;
