import AppName from "./Compnents/AppNameHeading";
import AddTask from "./Compnents/AddToDoTask";
import ToDoItem1 from "./Compnents/ToDoItem1";
import ToDoItem2 from "./Compnents/ToDoItem2";
import ToDoItem3 from "./Compnents/ToDoItem3";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />

      <AddTask />
      <div className="items-container">
      <ToDoItem1 />
      <ToDoItem2 />
      <ToDoItem3></ToDoItem3>
      </div>
    </center>
  );
}

export default App;
