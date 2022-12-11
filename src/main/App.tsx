import React from 'react';
import BreweryList from '../brewery/BreweryList';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className='container'>
      <Header subtitle="All Breweries in US"></Header>
      <BreweryList />
    </div>
  );
}

export default App;
