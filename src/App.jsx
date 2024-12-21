
import RockyBotton from "./RockyInput";    //import means, when we use one component in another jsx file ,so we use import.
import DynamicComp from "./DynamicComp";
import RandomComp from "./RandomComp";
function app() {
  return <div>
  
      <h1>hey this side rocky is here</h1>
      
      <DynamicComp></DynamicComp>
       <button>hate</button>
       <RockyBotton></RockyBotton>
       <RandomComp></RandomComp>
       <RandomComp></RandomComp>
       <RandomComp></RandomComp>
       <RandomComp></RandomComp>
       <RandomComp></RandomComp>
  </div>        
   
}




export default app;  //whatever component defines in inside the app() function ,when we want to use that omponent or function in any 
                     //where,so we use "export default app;"".