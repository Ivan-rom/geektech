import styles from "./clicker.module.css";

function Clicker() {
  const buttonHandler = (event) => {
    console.log(event.target);
  };
  const clickHandler = function (event) {
    console.log(event.target);
    event.preventDefault();
  };

  return (
    <>
      <button onClick={buttonHandler}>Нажми на меня</button>
      <br />
      <a href="https://google.com" onClick={clickHandler}>
        Google
      </a>
      <div
        className={`${styles.box} ${styles.border}`}
        onClick={(e) => console.log(e.target)}
      >
        BOX
      </div>
    </>
  );
}

export default Clicker;
