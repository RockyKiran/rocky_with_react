import AppName from "./Compnents/AppNameHeading";
import AddTask from "./Compnents/AddToDoTask";
import ToDoItems from "./Compnents/ToDoItems";
import WelcomeMsg from "./Compnents/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  function handleNewItem(itemName, itemDueDate) {
    // console.log(`new item added :${itemName} and New DueDate :${itemDueDate}`);
    const newToDoItems = [
      ...toDoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newToDoItems);
  }
  function handleDeleteItem(toDoItemName) {
    const newToDoItems = toDoItems.filter((item) => item.name !== toDoItemName);
    setToDoItems(newToDoItems);
  }

  return (
    <center className="todo-container">
      <AppName />

      <AddTask onNewItem={handleNewItem} />
      {toDoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <div className="items-container">
        <ToDoItems
          ToDoItems={toDoItems}
          onDeleteClick={handleDeleteItem}
        ></ToDoItems>
      </div>
    </center>
  );
}

export default App;
