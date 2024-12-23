function AddTask(){

return <div>

<div class="row items-row">
        <div class="col-5">
          <input type="text" placeholder="Enter ToDo here" />
        </div>
        <div class="col-3">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary items-button">
            ADD
          </button>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-info items-button">
            Status
          </button>
        </div>
      </div>
</div>

}

export default AddTask;