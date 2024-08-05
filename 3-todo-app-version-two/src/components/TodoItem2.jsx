function TodoItem2() {
  let task = "Book Train Ticket";
  let date = "05-07-2024";
  return (
    <>
      <div className="container text-container">
        <div className="row pk-row">
          <div className="col-6">{task}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button className="btn btn-danger pk-button">delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem2;
