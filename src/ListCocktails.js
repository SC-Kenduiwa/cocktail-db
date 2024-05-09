import React, { useState, useEffect } from "react";
import './ListCocktails.css'

function ListCocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);

  useEffect(() => {
    async function fetchCocktails() {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cocktails");
        }
        const data = await response.json();
        // Sort cocktails alphabetically by letters
        const sortedCocktails = data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
        setCocktails(sortedCocktails || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
        setLoading(false);
      }
    }
    fetchCocktails();
  }, []);

  // Function to filter cocktails by selected letter
  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
    setSelectedNumber(null); // Clear selected number
  };

  // Function to filter cocktails by selected number
  const filterByNumber = (number) => {
    setSelectedNumber(number);
    setSelectedLetter(null); // Clear selected letter
  };

  // Function to render a message when no cocktails are available for the selected letter
  const renderNoCocktailsMessage = () => {
    if (selectedLetter) {
      const letterCocktails = cocktails.filter(cocktail => cocktail.strDrink.charAt(0).toUpperCase() === selectedLetter);
      if (letterCocktails.length === 0) {
        return <p className="no-cocktails-message">No cocktails available starting with the letter {selectedLetter}.</p>;
      }
    }
    return null;
  };

  return (
    <div className="background"> 
      <div className="container">
        <h1 className="title">MY COCKTAIL LIST</h1>
        <div className="filter-bar">
          {/* Bar of letters */}
          <div className="letter-bar">
            {[...Array(26)].map((_, index) => (
              <button key={index} onClick={() => filterByLetter(String.fromCharCode(65 + index))}>
                {String.fromCharCode(65 + index)}
              </button>
            ))}
          </div>
          {/* Bar of numbers */}
          <div className="number-bar">
            {[...Array(10)].map((_, index) => (
              <button key={index} onClick={() => filterByNumber(index)}>
                {index}
              </button>
            ))}
          </div>
        </div>
        {loading ? (
          <p className="paragraph">Loading...</p>
        ) : (
          <div className="inner-div">
            {/* Grouping cocktails by their first letter or number */}
            {Object.entries(
              cocktails.reduce((acc, cocktail) => {
                let groupingKey;
                if (selectedLetter) {
                  groupingKey = cocktail.strDrink.charAt(0).toUpperCase() === selectedLetter ? selectedLetter : null;
                } else if (selectedNumber) {
                  groupingKey = parseInt(cocktail.strDrink.charAt(0)) === selectedNumber ? selectedNumber : null;
                }
                if (groupingKey) {
                  if (!acc[groupingKey]) {
                    acc[groupingKey] = [];
                  }
                  acc[groupingKey].push(cocktail);
                }
                return acc;
              }, {})
            ).map(([groupingKey, drinks]) => (
              <div key={groupingKey} className="inner-inner-div">
                <h2 className="h2-letter">{groupingKey}</h2>
                <ul className="un-ordered">
                  {drinks.map(cocktail => (
                    <li key={cocktail.idDrink} className="list">
                      <div className="cocktail-name">{cocktail.strDrink}</div>
                      <div className="cocktail-image">
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Render message when no cocktails available for selected letter */}
            {renderNoCocktailsMessage()}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListCocktails;
