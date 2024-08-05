import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "buy milk",
      dueDate: "04-10-2023",
    },
    {
      name: "go to college",
      dueDate: "04-10-2023",
    },
    {
      name: "like the video",
      dueDate: "right now",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItems todoItems={todoItems}></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;
