import Item from "./Item";
function FoodList({foodItems}) {
  // let foodItems = [
  //   "milk",
  //   "Vegetables",
  //   "Egg",
  //   "Fruits",
  //   "Fish Fry",
  //   "Mutton Handi",
  //   "Chicken Curry",
  //   "Biriyani"
  // ];

  return (
    <>
      <ul className="list-group">
        { foodItems.map((item) => (
           <Item key={Item} foodItem={foodItems}>{item}</Item>
        ))}
      </ul>
    </>
  );
}

export default FoodList;
