

function App() {

  let foodItems=['milk','Vegetables','Egg','Fruits','Fish Fry','Mutton Handi','Chicken Curry','Biriyani'];
  // let helthyFood=foodItems.map((items)=>(<li key={items} className="list-group-item list-group-item-dark">{items}</li>))


  
  return (
    <>
              <h1>Healthy Food</h1>

        <ul className="list-group">
        {foodItems.map((items)=>(<li key={items} className="list-group-item list-group-item-dark">{items}</li>))}
        {/* {helthyFood} */}
        
        </ul>

    </>
  )
}

export default App
