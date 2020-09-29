import React, { useEffect } from 'react';
import Banner from './components/Banner';
import CitiesWeather from './components/CitiesWeather';
import DaysForecast from './components/DaysForecast';
import FixedCurrent from './components/FixedCurrent';
import PlaceVisit from './components/PlaceVisit';
import './styles/styles.css';

function App() {

  useEffect(() => {
    loadWeather()
  }, [])

  const loadWeather = () => {
    const Http = new XMLHttpRequest();
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=bogota&appid=d9808b61d1fc7e7235bb8e197bc5a6ac';
    Http.open('GET', url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log('RES', Http.responseText)
    }
  }

  return (
    <>
      <FixedCurrent />
      <div className='app'>
        <Banner cityName='Bogotá' />
        <div class='app__secondary'>
          <DaysForecast />
          <PlaceVisit />
          <CitiesWeather />
        </div>
      </div>
    </>
  )
}

export default App;
