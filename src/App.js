import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilterAlcohol from './FilterAlcohol';
import Home from './Home';
import SearchByIngredients from './SearchByIngredients'; // Import the SearchByIngredients component
import FilterAlcohol from './FilterAlcohol'; 
import Home from './Home'; 
import CategoryFilter from './Filter';

// App component
function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ textAlign: 'center', margin: '20px 0' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline-block', marginRight: '20px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li style={{ display: 'inline-block', marginRight: '20px' }}>
              <Link to="/FilterAlcohol" style={{ textDecoration: 'none', color: 'black' }}>Filter Alcohol</Link>
            </li>
            {/* Add a space between the navigation links */}
            <li style={{ display: 'inline-block' }}>
              <Link to="/SearchByIngredients" style={{ textDecoration: 'none', color: 'black' }}>Search By Ingredients</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FilterAlcohol" element={<FilterAlcohol />} />
            <Route path="/SearchByIngredients" element={<SearchByIngredients />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
