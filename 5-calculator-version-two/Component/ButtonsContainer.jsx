import styles from "./ButtonsContainer.module.css";
function ButtonsContainer({onButtonClick}) {
  let buttonNames = [
    "c",
    "1",
    "2",
    "B",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "=",
    "9",
    "/",
    "0",
    ".",
    
  ];
  return (
    <>
      <div id={styles.buttonsContainer}>
        {buttonNames.map((button) => (
          <button
            key={button}
            type="button"
            className="btn btn-outline-primary"
            id={styles.button}
            onClick={()=>onButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonsContainer;
