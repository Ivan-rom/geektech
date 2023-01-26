import styles from "./button.module.css";

function Button({ text, handler, isDisabled = false }) {
  return (
    <button
      className={isDisabled ? styles.disabledButton : styles.button}
      onClick={handler}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default Button;
