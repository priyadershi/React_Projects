import { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import styles from "./addTodo.module.css";

function AddTodo({ handleAdd }) {
  let [inputName, setInputName] = useState("");
  let [inputDate, setInputDate] = useState("");
  const saveTask = (event) => {
    setInputName(event.target.value);
  };

  const saveDate = (event) => {
    setInputDate(event.target.value);
  };

  const handleAddAction = () => {
    handleAdd(inputName, inputDate);
    setInputDate("");
    setInputName("");
  };

  return (
    <>
      <div className="container text-container">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter to-do here"
              onChange={saveTask}
              value={inputName}
            />
          </div>
          <div className="col-4">
            <input type="date" value={inputDate} onChange={saveDate} />
          </div>
          <div className="col-2">
            <button
              className={`btn btn-success pk-button ${styles.addBtn}`}
              onClick={handleAddAction}
            >
              <MdPostAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
