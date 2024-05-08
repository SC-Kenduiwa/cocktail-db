import React, { useState, useEffect } from "react";
import './ListCocktails.css'

function ListCocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCocktails() {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cocktails");
        }
        const data = await response.json();
        setCocktails(data.drinks || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
        setLoading(false);
      }
    }
    fetchCocktails();
  }, []);

  return (
    <div className="container">
        <h1 className="title">MY COCKTAIL LIST</h1>
      {loading ? (
        <p className="paragraph">Loading...</p>
      ) : (
        <div className="inner-div">
          {/* Grouping cocktails by their first letter */}
          {Object.entries(
            cocktails.reduce((acc, cocktail) => {
              const firstLetter = cocktail.strDrink.charAt(0).toUpperCase();
              if (!acc[firstLetter]) {
                acc[firstLetter] = [];
              }
              acc[firstLetter].push(cocktail);
              return acc;
            }, {})
          ).map(([letter, drinks]) => (
            <div key={letter} className="inner-inner-div">
              <h2 className="h2-letter">{letter}</h2>
              <ul className="un-ordered">
                {drinks.map(cocktail => (
                  <li key={cocktail.idDrink} className="list">{cocktail.strDrink}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListCocktails;
