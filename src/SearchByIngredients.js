import React, { useState } from "react";

    const SearchByIngredients = () => { 
    const[ ingredients, setIngredients]=useState("");
    const [searchResults, setSearchResults]= useState([]);
}


    const handleInputCange = (event) => {
        setIngredients(event.target.value)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const response = await axios.get(
              `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}`
            );
            setSearchResults(response.data.drinks || []); // Updating the 'searchResults' state with the fetched data
          } catch (error) { 
            console.error("Error fetching data:", error); 
          }
    };

    return (
        <div>

            <h1> Search Cocktails by Ingredients</h1>
            <form onsubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter ingredients se[arated by commas..."
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

export default SearchByIngredients;