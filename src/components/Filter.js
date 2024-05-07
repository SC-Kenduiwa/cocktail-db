import React, { useState } from "react";

function CategoryFilter() {
  const [chosenCategory, setChosenCategory] =useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(data => {setCocktails(data.drinks);
      })
      .catch(error => console.log(`Error fetching data:${error}`));
  }, []);

 console.log(cocktails);

  function onCategoryChange (category){
  setChosenCategory(category)
  }


  return(
 <div>  
  <label> SELECT CATEGORY </label>
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
  </div>
  )
}

export default CategoryFilter;
