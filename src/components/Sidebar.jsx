/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <>
      <div className="border rounded-lg text-gray-600 bg-base-100 p-2 ">
        <h2 className="text-center text-2xl font-bold border-b-2 py-2 mb-3">
          Want to Cook {recipeQueue.length}
        </h2>
        {/* want to cook table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipeQueue.map((recipe, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(recipe.recipe_id);
                        calculateTimeAndCalories(
                          recipe.preparing_time,
                          recipe.calories
                        );
                      }}
                      className="p-2 hover:bg-slate-600 hover:text-white rounded-full border-none bg-[#0BE58A] text-black"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-center text-2xl font-bold border-b-2 py-2 my-6">
          Currently Cooking {preparedRecipe.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {preparedRecipe.map((recipe, idx) => (
                <tr className="hover" key={idx}>
                  <th>{idx + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td></td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>Total Time: {totalTime}</td>
                <td>Total Calories: {totalCalories}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* currently cooking table */}
    </>
  );
};

export default Sidebar;
