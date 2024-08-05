import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
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

  const handleAdd = (inputTask, inputDate) => {
    if (inputTask && inputDate) {
      let newTodoItems = [
        ...todoItems,
        { name: inputTask, dueDate: inputDate },
      ];
      setTodoItems(newTodoItems);
    } else alert("Invalid Input!");
  };

  const handleDeletedItem = (itemName) => {
    let remainingItems = todoItems.filter((item) => item.name != itemName);
    setTodoItems(remainingItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo handleAdd={handleAdd} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <div className="items-container">
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeletedItem}
          ></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;
