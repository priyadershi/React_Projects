import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

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
  return (
    <>
      <div className={styles.container}>
        <Display></Display>
        <Keypad keys={keys}></Keypad>
      </div>
    </>
  );
}

export default App;
