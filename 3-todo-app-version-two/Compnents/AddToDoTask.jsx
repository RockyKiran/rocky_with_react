import { useState } from "react";

function AddTask({ onNewItem }) {
  const [toDoName, setToDoName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(toDoName, dueDate);
    setDueDate("");
    setToDoName("");
  };

  return (
    <div>
      <div className="row items-row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter ToDo here"
            value={toDoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-3">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary items-button"
            onClick={handleAddButtonClicked}
          >
            ADD
          </button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-info items-button">
            Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
