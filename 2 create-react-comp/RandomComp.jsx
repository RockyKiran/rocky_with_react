function RandomComp(){

  let number=Math.random() * 100;
  return <h1 style={{'background-color':'hotpink','color':'red','border':'4px solid black','borderRadius':'20px'}}>The Random number is {Math.round(number)} </h1>
}

export default RandomComp;