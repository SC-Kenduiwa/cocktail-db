import React, { useState, useEffect } from 'react';

const CocktailFilter = () => {
  const [drinks, setDrinks] = useState([]);
  const [filter, setFilter] = useState('Alcoholic');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json'); 
        const data = await response.json();
        const filteredDrinks = data.drinks.filter(drink => drink.strAlcoholic === filter);
        setDrinks(filteredDrinks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();//fetch data from dbjson
  }, [filter]);//apply the filter

  const handleFilterChange = (e) => {//will handle the change
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Cocktails</h2>
      <div>
        <label>
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
      <ul>
        {drinks.map((drink) => (
          <li key={drink.idDrink}>{drink.strDrink}</li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailFilter;
