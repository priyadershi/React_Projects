import { useContext, useReducer, useRef, useState } from "react";
import { MdPostAdd } from "react-icons/md";
import styles from "./addTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  // let [inputName, setInputName] = useState("");
  // let [inputDate, setInputDate] = useState("");

  let taskElement = useRef();
  let dateElement = useRef();

  // const saveTask = (event) => {
  //   setInputName(event.target.value);
  // };

  // const saveDate = (event) => {
  //   setInputDate(event.target.value);
  // };

  //using context Api
  const contextObj = useContext(TodoItemsContext);
  let handleAdd = contextObj.handleAdd;

  const handleAddAction = (event) => {
    console.log(event);
    event.preventDefault();
    let inputName = taskElement.current.value;
    let inputDate = dateElement.current.value;
    taskElement.current.value = "";
    dateElement.current.value = "";
    handleAdd(inputName, inputDate);
  };

  return (
    <>
      <form className="container text-container" onSubmit={handleAddAction}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter to-do here"
              ref={taskElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dateElement} />
          </div>
          <div className="col-2">
            <button className={`btn btn-success pk-button ${styles.addBtn}`}>
              <MdPostAdd />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
