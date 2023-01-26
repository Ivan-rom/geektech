import styles from "./navigation.module.css";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Navigation({ handler, openForm }) {
  return (
    <nav className={styles.navigation}>
      <Search handler={handler} />
      <Button handler={() => openForm("block")} text="Sign in" />
    </nav>
  );
}

export default Navigation;
