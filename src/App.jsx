import { useState } from "react";
import "./App.css";
import Banner from "./components/Herosection/Banner";
import Navbar from "./components/Herosection/Navbar";
import Oursection from "./components/Herosection/Oursection";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleRemove = (id) => {
    // find what to remove
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    // remove from want to cook
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (isExist) {
      return alert("Recipe is already Exist");
    } else {
      setRecipeQueue([...recipeQueue, recipe]);
    }
  };
  const calculateTimeAndCalories = (time, calories) => {
    const timeInt = parseInt(time, 10); // Safely parse the time to an integer
    const caloriesInt = parseInt(calories, 10); // Safely parse calories to an integer

    setTotalTime(totalTime + timeInt);
    setTotalCalories(totalCalories + caloriesInt);
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Oursection></Oursection>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
        {/* card Section */}
        <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
        {/* sidebar section */}
        <Sidebar
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          recipeQueue={recipeQueue}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </>
  );
}

export default App;
