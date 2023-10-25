import React, { useEffect, useState, useRef } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, siteData }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [inputColor, setInputColor] = useState("#AEAEAE");
  const searchBarRef = useRef(null);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);

    const filteredSuggestions = siteData.filter((site) =>
      site.sna.toLowerCase().includes(newQuery.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setInputColor(newQuery ? "#B5CC22" : "#AEAEAE");
  };

  const handleInput = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);

    const filteredSuggestions = siteData.filter((site) =>
      site.sna.toLowerCase().includes(newQuery.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setInputColor(newQuery ? "#B5CC22" : "#AEAEAE");
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.sna);
    setSuggestions([]);
    onSearch(suggestion.sna);
  };

  useEffect(() => {
    const handleGlobalClick = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div className={styles.searchContainer} ref={searchBarRef}>
      <input
        id="searchBar"
        type="text"
        placeholder="搜尋站點"
        value={query.replace("YouBike2.0_", "")}
        onChange={handleInputChange}
        onInput={handleInput}
        autoComplete="off"
        className={styles.searchbar}
        style={{ color: inputColor }}
      />
      <ul className={styles.suggestionList}>
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.sno}
            onClick={() => handleSuggestionClick(suggestion)}
            className={styles.suggestionItem}
          >
            {suggestion.sna.replace("YouBike2.0_", "")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
