import styles from "./App.module.css";
import Display from "./Component/Display";
import ButtonsContainer from "./Component/ButtonsContainer";
function App() {
  return (
    <>
    <center>
      <div id={styles.calculator}>
        <Display></Display>
      <ButtonsContainer></ButtonsContainer>
      </div>
      </center>
    </>
  );
}

export default App;
