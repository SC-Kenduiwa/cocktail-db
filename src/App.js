import React from 'react';
import SearchByIngredients from './SearchByIngredients';
//import FilterAlcohol from './FilterAlcohol'
import './App.css';
import CategoryFilter from "./Filter"
import ListCocktails from './ListCocktails';

function App() {
  return (
    <div className="App">
      <main> 
        <SearchByIngredients/>
          <CategoryFilter/>
          <ListCocktails/>
      </main>
    </div>
  );
}

export default App;
