import React from 'react';
import SearchByIngredients from './SearchByIngredients';
import CocktailFilter from './CocktailFilter'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Cocktail Database</h1>
      </header>
      <main>
        <CocktailFilter />
      </main>
    </div>
  );
}
