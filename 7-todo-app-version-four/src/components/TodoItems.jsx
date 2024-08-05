import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  let { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
