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

    }

export default SearchByIngredients;