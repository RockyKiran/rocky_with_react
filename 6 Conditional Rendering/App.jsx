

function App() {

  // 'milk','Vegetables','Egg','Fruits','Fish Fry','Mutton Handi','Chicken Curry','Biriyani'
  let foodItems=[];
  // let foodList=['aloo']
  // let foodItems=['milk','Vegetables','Egg','Fruits','Fish Fry','Mutton Handi','Chicken Curry','Biriyani']



  //using if-else method:

  // if(foodItems.length==0){
  //     return <h1>I am still hungry</h1>
  // }

  //using ternary operators: bellow 

  // let emptyMsg=
          //  foodItems.length==0 ? <h1>I am still hungry</h1> : null;      (OR)

  //logical operator: bellow


  
  


  
  return (
    <>
              <h1>Healthy Food</h1>

              {/* {emptyMsg}                                                       using ternary operatorv */}

              {/* {foodItems.length==0 && <h1>I am still hungry</h1> }            using logical operator */}

             {/* {foodItems==0 ? <h1>I am still hungry</h1> : null}           using ternary operator */}



        <ul className="list-group">
        {foodItems.map((items)=>(<li key={items} className="list-group-item list-group-item-dark">{items}</li>))}
        
        </ul>

    </>
  )
}

export default App
