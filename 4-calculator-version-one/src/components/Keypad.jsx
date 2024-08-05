import styles from "./Keypad.module.css";

const Keypad = ({ keys }) => {
  return (
    <div>
      {keys.map((key) => (
        <button className={styles.button}>{key}</button>
      ))}
    </div>
  );
};

export default Keypad;
