import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchByIngredients = () => {
  const [ingredients, setIngredients] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}`
        );
        setSearchResults(response.data.drinks || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (ingredients !== "") {
      fetchCocktails();
    }
  }, [ingredients]);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };


  return (
    <div>
      <h1>Search Cocktails by Ingredients</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ingredients separated by commas..."
          value={ingredients}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((cocktail) => (
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchByIngredients;
