import React, { useState , useEffect} from "react";

function CategoryFilter() {
  const [chosenCategory, setChosenCategory] =useState("All");
  const [cocktails, setCocktails] = useState([]);
  const [list,setList] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then(res => res.json())
      .then(data => {setCocktails(data.drinks);
      })
      .catch(error => console.log(`Error fetching data:${error}`));
  }, []);

  useEffect(() => {
    const filteredList = cocktails.filter(cocktail => {
      if (chosenCategory === "All") return true;
      return cocktail.strCategory === chosenCategory;
    });
    setList(filteredList);
  }, [chosenCategory, cocktails]);

const display = list.map(cocktail => (
  <div key={cocktail.idDrink}>
    <h3>{cocktail.strDrink}</h3>
    <p>Category:{cocktail.strCategory}</p>
    <p>Alcohol-content: {cocktail.strAlcoholic}</p>
    <p>Glass: {cocktail.strGlass}</p>
    <p>Instructions: {cocktail.strInstructions}</p>
    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ maxWidth: '200px' }}/>
    </div>

))



  return(
 <div>  
  <label> SELECT CATEGORY </label>
    <select
    name="filter"
    value={chosenCategory}
    onChange={(e) => setChosenCategory(e.target.value)}
  >
    <option value="All">Filter by category</option>
    <option value="Ordinary Drink">Ordinary Drink</option>
    <option value="Cocktail">Cocktail</option>
    <option value="Shot">Shot</option>
    <option value="Coffee / Tea">Coffee / Tea</option>
    <option value="Punch / Party Drink">Punch / Party Drink</option>
    <option value="Beer">Beer</option>
    
  </select>

 {display}
  </div>
  )
}

export default CategoryFilter;
