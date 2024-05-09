import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilterAlcohol from './FilterAlcohol'; 
import Home from './Home'; 
import CategoryFilter from './Filter';
import SearchByIngredients from './SearchByIngredients'

// App component
function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ textAlign: 'center', margin: '20px 0' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline-block', marginRight: '20px' }} className="navlinks">
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </li>
            <li style={{ display: 'inline-block' }} className="navlinks">
              <Link to="/FilterAlcohol" style={{ textDecoration: 'none', color: 'black', marginRight:"20px" }}>Filter Alcohol  </Link>
            </li>
            <li style={{ display: 'inline-block' }} className="navlinks">
              <Link to="/CategoryFilter" style={{ textDecoration: 'none', color: 'black', marginRight: "20px" }}>Explore by Category</Link>
            </li>
            <li style={{ display: 'inline-block' }} className="navlinks">
              <Link to="/SearchByIngredients" style={{ textDecoration: 'none', color: 'black', marginRight: "20px" }}>Search By Ingredients</Link>
              </li>
            
            <li style={{ display: 'inline-block' }} className="navlinks">
              <Link to="/SearchByName" style={{ textDecoration: 'none', color: 'black' }}>Search By Name</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FilterAlcohol" element={<FilterAlcohol />} />
            <Route path="/CategoryFilter" element={<CategoryFilter/>} />
            <Route path="/SearchByIngredients" element={<SearchByIngredients />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;