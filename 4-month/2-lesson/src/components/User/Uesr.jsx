import styles from "./user.module.css";

function User({ person }) {
  console.log(styles);
  return (
    <li>
      <span className={styles.textBlue}>{person.name}, </span>
      <span>{person.age} years</span>
    </li>
  );
}

export default User;
