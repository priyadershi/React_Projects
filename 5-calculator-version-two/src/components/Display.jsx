import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        type="text"
        className={styles.display}
        value={displayValue}
        readOnly
      ></input>
    </div>
  );
};

export default Display;
