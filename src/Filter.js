import React, { useState , useEffect} from "react";
import "./Filter.css"

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
  <div key={cocktail.idDrink} className="displayList">
    <main className="text-content">
    <h3 className="name">{cocktail.strDrink}</h3>
    <p className="cocktail-info"><strong>Category:</strong>{cocktail.strCategory}</p>
    <p className="cocktail-info"><strong>Alcohol-content:</strong> {cocktail.strAlcoholic}</p>
    <p className="cocktail-info"><strong>Glass:</strong> {cocktail.strGlass}</p>
    <p className="cocktail-info"><strong>Instructions: </strong>{cocktail.strInstructions}</p>
    </main>
    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
    </div>

))



  return(
 <div className="cocktail-container">  
  <label className="label"> 
  SELECT CATEGORY: </label>
    <select
    name="filter"
    value={chosenCategory}
    onChange={(e) => setChosenCategory(e.target.value)}
    className="dropdown"
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
