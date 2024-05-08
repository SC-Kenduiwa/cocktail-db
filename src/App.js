import './App.css';
import React from 'react';
import SearchByIngredients from './SearchByIngredients';


function App() {
  return (
    <div className="App">
      <SearchByIngredients />
      <header className="App-header">
        <h1>Welcome to the Cocktail Database</h1>
      </header>
      <main>
        <CocktailFilter />
      </main>
    </div>
  );
}

export default App;
