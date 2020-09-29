import React from 'react';
import Banner from './components/Banner';
import CitiesWeather from './components/CitiesWeather';
import DaysForecast from './components/DaysForecast';
import FixedCurrent from './components/FixedCurrent';
import PlaceVisit from './components/PlaceVisit';
import './styles/styles.css';

function App() {
  return (
    <div className="app">
      <FixedCurrent />
      <Banner cityName='Bogotá' />
      <div class="app__secondary">
        <DaysForecast />
        <PlaceVisit />
        <CitiesWeather />
      </div>
    </div>
  )
}

export default App;
