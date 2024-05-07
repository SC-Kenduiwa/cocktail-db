import React, { useState } from "react";

function SearchByIngredients=() => {
    const[ ingredients, setIngredients]=useState("");
    const [searchResults, setSearchResults]= useState([]);
}


    const handleInputCange = (event) => {
        setIngredients(event.target.value)
    }

export default SearchByIngredients;