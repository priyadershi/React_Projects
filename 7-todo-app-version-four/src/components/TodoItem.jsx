import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const contextObj = useContext(TodoItemsContext);
  let handleDelete = contextObj.handleDelete;

  return (
    <>
      <div className={`container ${styles.itemContainer}`}>
        <div className={`row ${styles["pk-row"]}`}>
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              className={`btn btn-danger ${styles["pk-button"]}`}
              onClick={() => handleDelete(todoName)}
            >
              <MdOutlineDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
