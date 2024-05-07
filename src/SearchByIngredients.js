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
            setSearchResults(response.data.drinks || []); 
          } catch (error) { 
            console.error("Error fetching data:", error); 
          }


    }

export default SearchByIngredients;