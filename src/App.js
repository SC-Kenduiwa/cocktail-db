import React from 'react';
<<<<<<< HEAD
import SearchByIngredients from './SearchByIngredients';
import FilterAlcohol from './FilterAlcohol'
import './App.css';
import CategoryFilter from "./Filter"
import ListCocktails from './ListCocktails';
=======
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilterAlcohol from './FilterAlcohol'; 
import Home from './Home'; 
>>>>>>> 4debb044ab33106269ce5afb47055cc5143a8c73

// App component
function App() {
  return (
<<<<<<< HEAD
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
=======
    <Router>
      <div className="App">
        <nav style={{ textAlign: 'center', margin: '20px 0' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline-block', marginRight: '20px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li style={{ display: 'inline-block' }}>
              <Link to="/FilterAlcohol" style={{ textDecoration: 'none', color: 'black' }}>Filter Alcohol</Link>
            </li>
            
          </ul>
        </nav>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FilterAlcohol" element={<FilterAlcohol />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

>>>>>>> 4debb044ab33106269ce5afb47055cc5143a8c73
export default App;
