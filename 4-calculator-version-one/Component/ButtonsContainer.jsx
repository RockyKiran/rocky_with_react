import styles from "./ButtonsContainer.module.css";
function ButtonsContainer() {
  let buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id={styles.buttonsContainer}>
        {buttonNames.map((button) => (
          <button
            type="button"
            className="btn btn-outline-primary"
            id={styles.button}
          >
            {button}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonsContainer;
