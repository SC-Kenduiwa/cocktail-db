import React from "react";

function CocktailList() {
  

  return(
    <select
    name="filter"
    value={category}
    onChange={(e) => onCategoryChange(e.target.value)}
  >
    <option value="All">Filter by category</option>
    <option value="Ordinary Drink">Ordinary Drink</option>
    <option value="Cocktail">Cocktail</option>
    <option value="Milk / Float / Shake">Milk / Float / Shake</option>
    <option value="Other/Unknown">Other/Unknown</option>
    <option value="Cocoa">Cocoa</option>
    <option value="Shot">Shot</option>
    <option value="Coffee / Tea">Coffee / Tea</option>
    <option value="Homemade Liqueur">Homemade Liqueur</option>
    <option value="Punch / Party Drink">Punch / Party Drink</option>
    <option value="Beer">Beer</option>
    <option value="Soft Drink / Soda">Soft Drink / Soda</option>
  
  </select>
  )
}

export default CocktailList;
