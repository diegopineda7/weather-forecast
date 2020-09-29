import React from 'react';
import Banner from './components/Banner';
import DaysForecast from './components/DaysForecast';
import './styles/styles.css';

function App() {
  return (
    <div className="app">
      <Banner cityName='Bogotá' />
      <div class="app__secondary">
        <DaysForecast />
      </div>
    </div>
  )
}

export default App;
