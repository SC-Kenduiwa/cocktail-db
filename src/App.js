import React from 'react';
import SearchByIngredients from './SearchByIngredients';
import FilterAlcohol from './FilterAlcohol'
import './App.css';
import CategoryFilter from "./Filter"
import ListCocktails from './ListCocktails';
import SearchByName from './SearchByName';

function App() {
  return (
    <div className="App">
      <main> 
        <FilterAlcohol/>
        <SearchByIngredients/>
          <CategoryFilter/>
          <ListCocktails/>
          <SearchByName/>
      </main>
    </div>
  );
}

export default App;
