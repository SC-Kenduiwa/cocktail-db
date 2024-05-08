import React from 'react';
import SearchByIngredients from './SearchByIngredients';
import FilterAlcohol from './FilterAlcohol'
import './App.css';
import React from "react";
import CategoryFilter from "./Filter"
import ListCocktails from './ListCocktails';

function App() {
  return (
    <div className="App">
      <main>
        <FilterAlcohol />
        <SearchByIngredients/>
          <CategoryFilter/>
          <ListCocktails/>
      </main>
    </div>
  );
}

export default App;
