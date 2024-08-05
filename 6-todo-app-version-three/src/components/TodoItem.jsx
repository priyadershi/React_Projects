import styles from "./TodoItem.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <>
      <div className={`container ${styles.itemContainer}`}>
        <div className={`row ${styles["pk-row"]}`}>
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              className={`btn btn-danger ${styles["pk-button"]}`}
              onClick={() => onDeleteClick(todoName)}
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
