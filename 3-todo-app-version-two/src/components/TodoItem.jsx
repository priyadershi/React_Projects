import styles from "./TodoItem.module.css";

const TodoItem = ({ todoName, todoDate }) => {
  return (
    <>
      <div className={`container ${styles.itemContainer}`}>
        <div className={`row ${styles["pk-row"]}`}>
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button className={`btn btn-danger ${styles["pk-button"]}`}>
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
