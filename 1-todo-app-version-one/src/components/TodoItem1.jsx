function TodoItem1() {
  let task = "Buy Milk";
  let date = "02-07-2024";
  return (
    <>
      <div class="container text-container">
        <div className="row pk-row">
          <div className="col-6">{task}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button class="btn btn-danger pk-button">delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem1;
