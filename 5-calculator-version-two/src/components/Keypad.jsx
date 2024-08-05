import styles from "./Keypad.module.css";

const Keypad = ({ keys, handleOnClick }) => {
  return (
    <div>
      {keys.map((key) => (
        <button
          key={key}
          className={styles.button}
          onClick={() => handleOnClick(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
