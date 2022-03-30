import React, { useState } from 'react';
import MealList from './MealList';

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=ffe94f85b869459b9961d926915cb416&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      });
  };

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  return (
    <div className='App'>
      <section className='controls'>
        <input
          type='number'
          placeholder='Calories (e.g 2000)'
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
