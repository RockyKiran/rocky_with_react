import styles from "./App.module.css";
import Display from "./Component/Display";
import ButtonsContainer from "./Component/ButtonsContainer";
import { useState } from "react";
function App() {

  const [ calValue,setCalValue ]= useState("");
   function onButtonClick(buttonText){
       //console.log(buttonText); 
       if(buttonText==='c'){
        setCalValue("");
       }
       else if(buttonText==='='){
        setCalValue(eval(calValue));
       }
       else if(buttonText==='B'){
        setCalValue(calValue.slice(0,-1))
       }
       else{
        let result=calValue + buttonText;
        setCalValue(result)
       }
   }

  

  return (
    <>
    <center>
      <div id={styles.calculator}>
        <Display calValue={calValue}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
      </center>
    </>
  );
}

export default App;
