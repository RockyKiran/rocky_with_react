function FoodItem({ FoodItem }) {
  function buttonOcl() {
    console.log(`the  ${FoodItem}being bought`);
  }

  return (
    <>
      <ul className="list-group" style={{ margin: "20px" }}>
        {FoodItem.map((item) => (
          <li key={item} className="list-group-item" style={{ color: "blue" }}>
            {item}
            <span>
              <button
                type="button"
                className="btn btn-success"
                style={{ float: "right" }}
                onClick={buttonOcl}
              >
                Buy
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default FoodItem;
