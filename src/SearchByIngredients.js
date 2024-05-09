import React, { useState, useEffect } from "react";
import axios from "axios"; 

const SearchByIngredients = () => {
  const [ingredients, setIngredients] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedCocktails, setDisplayedCocktails] = useState([]);

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

  // Function to load cocktails with water as an ingredient when component mounts
  useEffect(() => {
    const loadDefaultCocktails = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin`
        );
        setSearchResults(response.data.drinks || []);
      } catch (error) {
        console.error("Error fetching default cocktails:", error);
      }
    };
    loadDefaultCocktails();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Update displayed cocktails when search results change or when the component mounts
  useEffect(() => {
    setDisplayedCocktails(searchResults.slice(0, 20)); // Display the first 20 cocktails
  }, [searchResults]);

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
    <div style={{ textAlign: "center", color: "black" }}>
      <h1 style={{ fontFamily: "Times New Roman", fontSize: "30px", marginBottom: "20px" }}>Search Cocktails by Ingredients</h1>
      <form onSubmit={handleSearch}>
        {/* Form for entering ingredients and triggering search */}
        <input
          type="text"
          placeholder="Enter ingredients"
          value={ingredients}
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Search</button> 
      </form>
      <h2> </h2>
      {/* Display search results */}
      <div className="cocktail-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {displayedCocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktail-item" style={{ marginRight: "20px", marginBottom: "20px" }}>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
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