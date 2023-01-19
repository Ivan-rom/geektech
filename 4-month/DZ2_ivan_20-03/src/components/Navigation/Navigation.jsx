import styles from "./navigation.module.css";
import Search from "../Search/Search";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Search />
      <NavigationButtons />
    </nav>
  );
}

export default Navigation;
