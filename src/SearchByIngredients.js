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
          placeholder="Enter ingredients"
          value={ingredients}
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

     

export default SearchByIngredients;
