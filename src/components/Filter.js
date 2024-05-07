import { useEffect, useState } from "react";

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(data => {setCocktails(data.drinks);
      })
      .catch(error => console.log(`Error fetching data:${error}`));
  }, []);

 console.log(cocktails);

const categories = [
    "Ordinary Drink",
    "Cocktail",
    "Milk / Float / Shake",
    "Other/Unknown",
    "Cocoa",
    "Shot",
    "Coffee / Tea",
    "Homemade Liqueur",
    "Punch / Party-Drink",
    "Beer",
    "Soft Drink / Soda"
]
}

export default CocktailList;
