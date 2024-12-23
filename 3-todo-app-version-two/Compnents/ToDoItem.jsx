function ToDoItem({ toDoName, toDoDate, onDeleteClick }) {
  return (
    <div>
      <center>
        <div className="row items-row">
          <div className="col-5">{toDoName}</div>
          <div className="col-3">{toDoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger items-button"
              onClick={() => onDeleteClick(toDoName)}
            >
              Delete
            </button>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-warning items-button">
              Complete
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default ToDoItem;
