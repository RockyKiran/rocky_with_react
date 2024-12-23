function ToDoItem1(){
  
  let todoName=" Buy Milk ";
  let todoDate=" 04/10/2023 ";

  return <div><center>
    <div class="row items-row">
        <div class="col-5">{todoName}</div>
        <div class="col-3">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger items-button">
            Delete
          </button>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-warning items-button">
            Complete
          </button>
        </div>
      </div>
      </center>
  </div>

}

export default ToDoItem1;