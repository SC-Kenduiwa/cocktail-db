import React from 'react';
import SearchByIngredients from './SearchByIngredients';
import FilterAlcohol from './FilterAlcohol'
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <FilterAlcohol />
        <SearchByIngredients/>
      </main>
    </div>
  );
}

export default App;
