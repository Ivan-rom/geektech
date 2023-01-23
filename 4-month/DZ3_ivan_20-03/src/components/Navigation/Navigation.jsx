import styles from "./navigation.module.css";
import Search from "../Search/Search";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

function Navigation({ handler }) {
  return (
    <nav className={styles.navigation}>
      <Search handler={handler} />
      <NavigationButtons />
    </nav>
  );
}

export default Navigation;
