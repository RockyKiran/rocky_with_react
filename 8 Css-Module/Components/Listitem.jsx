import styles from "./ListItem.module.css";
function ListItem({ items }) {
  return (
    <>
    <h1 className={styles.gandu}>hey buudy your list</h1>
    <h3 className={styles.chutiye}>ajj apun chicken khaega</h3>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className={`${styles["item-css"]}`}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListItem;
