import styles from "./search.module.css";

function Search() {
  return (
    <form className={styles.searchForm} action="#">
      <input className={styles.searchInput} type="text" name="search" />
      <button className="button">Search</button>
    </form>
  );
}

export default Search;
