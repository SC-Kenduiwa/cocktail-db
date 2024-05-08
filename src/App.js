import React from 'react';
import SearchByIngredients from './SearchByIngredients';
import FilterAlcohol from './FilterAlcohol'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Cocktail Database</h1>
      </header>
      <main>
        <FilterAlcohol />
      </main>
    </div>
  );
}
export default App;
