import { useState } from "react";
import NameInput from "./Component/NameInput";

function App() {
  // let textStateArr = useState("name entered by the user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
    
     //or we can wwrite the hook state

     let [ textToShow, setTextState ] =useState("name entered by the user")

     console.log(`my self ${textToShow}`); 

  function handleOnChange(event) {
    console.log(event.target.value);
     setTextState(event.target.value);
  }

  return (
    <>
      <NameInput handleOnChange={handleOnChange}></NameInput>
      <p>{textToShow}</p>
    </>
  );
}

export default App;
