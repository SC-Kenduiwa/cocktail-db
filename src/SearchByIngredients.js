import React, { useState } from "react"; // Import React and useState hook
import axios from "axios"; // Import axios for making HTTP requests

const SearchByIngredients = () => { // Define SearchByIngredients component
  const [ingredients, setIngredients] = useState(""); // State for storing user input of ingredients
  const [searchResults, setSearchResults] = useState([]); // State for storing search results

  // Function to fetch cocktails based on ingredients
  const fetchCocktails = async () => {
    try {
      // Check if ingredients input is not empty
      if (ingredients.trim() !== "") {
        // Fetch cocktails data from API based on ingredients
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}`
        );
        // Update searchResults state with fetched cocktails
        setSearchResults(response.data.drinks || []);
      } else {
        // If ingredients input is empty, clear searchResults
        setSearchResults([]);
      }
    } catch (error) {
      // Log error if fetching data fails
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
    event.preventDefault(); // Prevent the default form submission behavior
    fetchCocktails(); // Call fetchCocktails when the search button is clicked
  };

  // Render component UI
  return (
    <div>
      <h1>Search Cocktails by Ingredients</h1>
      <form onSubmit={handleSearch}> {/* Form for entering ingredients and triggering search */}
        <input
          type="text"
          placeholder="Enter ingredients"
          value={ingredients}
          onChange={handleInputChange} // Handle input change event
        />
        <button type="submit">Search</button> {/* Button to trigger search */}
      </form>
      <h2>Search Results</h2>
      <div className="cocktail-list"> {/* Display search results */}
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

export default SearchByIngredients; // Export SearchByIngredients component
