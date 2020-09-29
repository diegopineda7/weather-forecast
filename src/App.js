import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import CitiesWeather from './components/CitiesWeather';
import DaysForecast from './components/DaysForecast';
import FixedCurrent from './components/FixedCurrent';
import PlaceVisit from './components/PlaceVisit';
import './styles/styles.css';

function App() {
  const [city, setCity] = useState('')

  useEffect(() => {
    loadWeather('bogota')
  }, [])

  const loadWeather = city => {
    const Http = new XMLHttpRequest()
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d9808b61d1fc7e7235bb8e197bc5a6ac`
    Http.open('GET', url)
    Http.send()

    Http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const result = JSON.parse(Http.responseText)
        setCity(result.city.name)
      }
    }
  }

  return (
    <>
      <FixedCurrent />
      <div className='app'>
        <Banner cityName={city} />
        <div className='app__secondary'>
          <DaysForecast />
          <PlaceVisit />
          <CitiesWeather />
        </div>
      </div>
    </>
  )
}

export default App;
