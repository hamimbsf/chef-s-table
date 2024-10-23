/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
const Recipes = ({ addRecipeQueue }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("../../public/recipes.json").then((res) =>
      res.json().then((data) => setRecipes(data))
    );
  }, []);
  return (
    <div className="col-span-2 grid grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe.recipe_id} className="card bg-base-100 border p-4">
          <figure className="rounded-md h-56 w-full ">
            <img className="bg-cover bg-center" src={recipe.recipe_image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.recipe_name}</h2>
            <p>{recipe.short_description}</p>
            <div className="divider"></div>
            <p className="text-lg font-semibold">
              Ingredients {recipe.ingredients.length}
            </p>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.idx}>{ingredient}</li>
            ))}
            <div className="divider"></div>
            <div className="flex mb-4 justify-between">
              <p>
                <i className="fa-regular fa-clock"></i> {recipe.preparing_time}{" "}
                min
              </p>
              <p>
                <i className="fa-solid fa-fire"></i> {recipe.calories} calories
              </p>
            </div>
            <button
              onClick={() => addRecipeQueue(recipe)}
              className="btn md:w-1/2 bg-[#0BE58A] rounded-full text-black"
            >
              Want to Cook
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
