import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { useState } from "react";

function App() {
  let keys = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let [calVal, setCalVal] = useState("0");

  const handleOnClick = (buttonName) => {
    let newVal;
    if (buttonName === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else if (buttonName === "C") {
      setCalVal("0");
    } else {
      if (calVal === "0") calVal = "";
      newVal = calVal + buttonName;
      setCalVal(newVal);
    }
    console.log(newVal);
  };

  return (
    <>
      <div className={styles.container}>
        <Display displayValue={calVal}></Display>
        <Keypad keys={keys} handleOnClick={handleOnClick}></Keypad>
      </div>
    </>
  );
}

export default App;
