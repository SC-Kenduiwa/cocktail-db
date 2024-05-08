import React from 'react';
import SearchByIngredients from './SearchByIngredients';
import FilterAlcohol from './FilterAlcohol'
import './App.css';
import React from "react";
import CategoryFilter from "./Filter"

function App() {
  return (
    <div className="App">
      <main>
        <FilterAlcohol />
        <SearchByIngredients/>
          <CategoryFilter/>
      </main>
    </div>
  );
}

export default App;
