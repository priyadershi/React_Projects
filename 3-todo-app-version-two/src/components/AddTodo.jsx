function AddTodo() {
  return (
    <>
      <div className="container text-container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter to-do here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button className="btn btn-success pk-button"> Add </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
