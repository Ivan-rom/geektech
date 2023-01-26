import { useState } from "react";
import styles from "./search.module.css";
import Button from "../Button/Button";

function Search({ handler }) {
  const [searchValue, setSearchValue] = useState("");
  const searchEvent = (e) => {
    e.preventDefault();
    handler(searchValue);
  };

  return (
    <form className={styles.searchForm} action="#" onSubmit={searchEvent}>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Button text="Search" />
    </form>
  );
}

export default Search;
