import React, { useState, useEffect } from 'react';

const FilterAlcohol = () => {
  // State variables
  const [drinks, setDrinks] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [loadingIngredients, setLoadingIngredients] = useState(false);
  const [ingredientCache, setIngredientCache] = useState({});

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetches cocktails data from the API
  const fetchData = async () => {
    try {
      console.log('Fetching cocktails...');
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
      const data = await response.json();
      setDrinks(data.drinks || []);
      console.log('Cocktails fetched successfully!');
    } catch (error) {
      console.error('Error fetching drinks:', error);
      console.log('Error fetching drinks:', error.message);
    }
  };

  // Handles filter change
  const handleFilterChange = async (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter); // Set the filter state
    try {
      console.log(`Fetching ${selectedFilter} cocktails...`);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${selectedFilter ? `a=${selectedFilter}` : 'c=Cocktail'}`);
      const data = await response.json();
      setDrinks(data.drinks || []);
      console.log(`${selectedFilter || 'All'} cocktails fetched successfully!`);
    } catch (error) {
      console.error('Error fetching drinks:', error);
      console.log('Error fetching drinks:', error.message);
    }
  };

  // Fetches cocktail details
  const fetchCocktailDetails = async (drinkId) => {
    setLoadingIngredients(true);
    try {
      console.log('Fetching cocktail details...');
      let ingredients = [];
      // Check if the ingredient information is already cached
      if (ingredientCache[drinkId]) {
        ingredients = ingredientCache[drinkId];
      } else {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
        const data = await response.json();
        if (data.drinks) {
          const cocktail = data.drinks[0];
          ingredients = [];
          for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}`];
            const measure = cocktail[`strMeasure${i}`];
            if (ingredient) {
              ingredients.push({ ingredient, measure });
            }
          }
          // Cache the ingredient information
          setIngredientCache({ ...ingredientCache, [drinkId]: ingredients });
        }
      }
      setSelectedCocktail({ ...selectedCocktail, ingredients });
      setLoadingIngredients(false);
      console.log('Cocktail details fetched successfully!');
    } catch (error) {
      console.error('Error fetching cocktail details:', error);
      console.log('Error fetching cocktail details:', error.message);
      setLoadingIngredients(false);
    }
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Title */}
      <h2 className="mt-4 mb-3">Cocktails</h2>
      
      {/* Filter options */}
      <div className="mb-3">
        <label className="mr-3">
          <input
            type="radio"
            value=""
            checked={filter === ''}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label className="mr-3">
          <input
            type="radio"
            value="Alcoholic"
            checked={filter === 'Alcoholic'}
            onChange={handleFilterChange}
          />
          Alcoholic
        </label>
        <label>
          <input
            type="radio"
            value="Non_Alcoholic"
            checked={filter === 'Non_Alcoholic'}
            onChange={handleFilterChange}
          />
          Non-Alcoholic
        </label>
      </div>
      
      {/* Cocktails grid */}
      <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="col-md-3 mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="card h-100"
              style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
              onClick={() => fetchCocktailDetails(drink.idDrink)}
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{drink.strDrink}</h5>
                <h6>Ingredients:</h6>
                <ul>
                  {ingredientCache[drink.idDrink] && ingredientCache[drink.idDrink].map((ingredient, index) => (
                    <li key={index}>{ingredient.measure} {ingredient.ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Loading message */}
      {loadingIngredients && <p>Loading cocktail details...</p>}
      
      {/* Selected cocktail details */}
      {selectedCocktail && (
        <div>
          <h2>{selectedCocktail.strDrink}</h2>
          <p>{selectedCocktail.strInstructions}</p>
          <img
            src={selectedCocktail.strDrinkThumb}
            alt={selectedCocktail.strDrink}
            style={{ maxWidth: '200px', boxShadow: '6px 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
          
        </div>
      )}
    </div>
  );
};

export default FilterAlcohol;