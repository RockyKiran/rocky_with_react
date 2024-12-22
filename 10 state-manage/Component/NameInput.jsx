import styles from "./NameInput.module.css";
function NameInput({handleOnChange}) {
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="enter your full name here"
        aria-label="Username"
        aria-describedby="basic-addon1"
        id={styles.nameInput}
        onChange={handleOnChange}
      />
    </>
  );
}
export default NameInput;
