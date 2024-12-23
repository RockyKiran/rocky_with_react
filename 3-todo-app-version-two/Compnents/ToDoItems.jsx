import ToDoItem from "./ToDoItem";
function ToDoItems({ ToDoItems, onDeleteClick }) {
  return (
    <>
      <div className="items-container">
        {ToDoItems.map((item) => (
          <ToDoItem
            toDoName={item.name}
            toDoDate={item.date}
            onDeleteClick={onDeleteClick}
            key={item.name}
          ></ToDoItem>
        ))}
      </div>
    </>
  );
}
export default ToDoItems;
