import ListItem from "./Components/Listitem";
function App() {

  let healthyFoods=['Egg','Fruits','Fish','Honey'];

  return (
    <>
      <h1 className="heading">This is Healthy Food</h1>
      <ListItem items={healthyFoods}></ListItem>
    </>
  );
}

export default App;
