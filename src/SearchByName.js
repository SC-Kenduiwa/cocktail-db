import React, { useState } from "react";
import axios from "axios";

const SearchByName = () => {
  const [cocktailName, setCocktailName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch cocktails based on name
  const fetchCocktails = async () => {
    try {
      if (cocktailName.trim() !== "") {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
        );
        setSearchResults(response.data.drinks || []);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle input change event
  const handleInputChange = (event) => {
    // Update cocktailName state with user input
    setCocktailName(event.target.value);
  };

  // Function to handle search button click event
  const handleSearch = async (event) => {
    event.preventDefault();
    fetchCocktails(); // Call fetchCocktails when the search button is clicked
  };

  // Render component UI
  return (
    <div>
      <h1>Search Cocktails by Name</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter cocktail name"
          value={cocktailName}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <h2>Search Results</h2>
      <div className="cocktail-list">
        {searchResults.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktail-item">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="cocktail-img"
            />
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchByName;
