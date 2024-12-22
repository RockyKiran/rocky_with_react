// import ErrorMsg from "./Components/ErrorMsg"
import ErrorMsg from "./Components/ErrorMsg"

import FoodList from "./Components/FoodItems";
function App() {
  let foodItems = [
    "milk",
    "Vegetables",
    "Egg",
    "Fruits",
    "Fish Fry",
    "Mutton Handi",
    "Chicken Curry",
    "Biriyani",
  ];

  return (
    <>
      <h1>Healthy Food</h1>

      <ErrorMsg foodi={foodItems}></ErrorMsg>    
      {/* <ErrorMsg></ErrorMsg> */}
      <ErrorMsg></ErrorMsg>
      <FoodList foodItems={foodItems}></FoodList>
    </>
  );
}

export default App;
