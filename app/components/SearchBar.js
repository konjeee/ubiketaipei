import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="搜尋站點"
        value={query}
        onChange={handleInputChange}
        className={styles.searchbar}
      />
    </div>
  );
};

export default SearchBar;
