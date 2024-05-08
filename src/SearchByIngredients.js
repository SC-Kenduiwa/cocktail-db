import React, { useState } from "react";
import axios from "axios"; 

const SearchByIngredients = () => {
  const [ingredients, setIngredients] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch cocktails based on ingredients
  const fetchCocktails = async () => {
    try {
      if (ingredients.trim() !== "") {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}`
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
    // Update ingredients state with user input
    setIngredients(event.target.value);
  };

  // Function to handle search button click event
  const handleSearch = async (event) => {
    event.preventDefault();
    fetchCocktails(); // Call fetchCocktails when the search button is clicked
  };

  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>Search Cocktails by Ingredients</h1>
      <form onSubmit={handleSearch}>
        {/* Form for entering ingredients and triggering search */}
        <input
          type="text"
          placeholder="Enter ingredients"
          value={ingredients}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button> 
      </form>
      <h2>Search Results</h2>
      <div className="cocktail-list" style={{ display: "flex", flexWrap: "wrap" }}> {/* Display search results */}
        {searchResults.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktail-item" style={{ marginRight: "20px", marginBottom: "20px" }}>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="cocktail-img"
              style={{ width: "300px", height: "auto" }} // Inline styling for image size
      

              style={{ width: "200px", height: "auto" }}
            />
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchByIngredients;
