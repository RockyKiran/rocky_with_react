import styles from "./Display.module.css";
function Display({calValue}) {
  return (
    <>
      <input type="text" className="form-control" id={styles.display} value={ calValue}  readOnly/>
    </>
  );
}
export default Display;
