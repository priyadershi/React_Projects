import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemContextProvider from "./store/todo-items-store";
function App() {
  // Previous version
  /* 
  let [todoItems, setTodoItems] = useState([
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
  ]);
  */

  //declaration of useReducer

  return (
    <>
      <TodoItemContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <div className="items-container">
            <TodoItems></TodoItems>
          </div>
        </center>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
