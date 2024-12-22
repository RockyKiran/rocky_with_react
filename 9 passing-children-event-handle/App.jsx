import HeadingName from "./Components/HeadingName";
import FoodItem from "./Components/FoodItem";
import Container from "./Components/Container";
function App() {
  let foodList=["Egg","Milk","Honey","Fish","Chicken","Fruit","Vegetable","Paneer","Beer","Whisky",]
  return (
    <>
      <Container>
        {/* <h1>Healthy Food is very good </h1> */}
        <HeadingName></HeadingName>
        <FoodItem FoodItem={foodList}></FoodItem>
      </Container>
      <Container>
        Hi my self Healthy Food I am most energy in compare then any food so if you eating me then you live a long life
      </Container>
    </>
  );
}

export default App;
