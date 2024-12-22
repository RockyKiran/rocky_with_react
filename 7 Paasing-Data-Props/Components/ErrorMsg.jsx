function ErrorMsg({foodi}){

  // let foodItems=['milk','Vegetables','Egg','Fruits','Fish Fry','Mutton Handi','Chicken Curry','Biriyani']

  return <>
  { {foodi}.length==0 && <h1>I am still hungry</h1> }
  </>
}

export default ErrorMsg;