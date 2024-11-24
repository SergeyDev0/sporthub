import React from "react";
import { Search } from "@mui/icons-material";
import styles from "./search.module.scss";

const SearchBar = () => {
    const [inputValue, setInputValue] = React.useState("");

    React.useEffect(() => {
        const timer = setTimeout(() => {
          console.log(inputValue)
        }, 500)
    
        return () => clearTimeout(timer)
      }, [inputValue])
    return (
        <div className={styles.search}>
            <input
                className={`${styles.searchInput} ${styles.searchInputInBurger}`}
                type="text"
                placeholder="Найти мероприятие"
                onChange={(e) => setInputValue(e.target.value)}
                id="searchInput"
            />
            <Search
                className={styles.searchIcon}
                style={{ color: "black" }}
                fontSize="medium"
            />
        </div>
    );
};

export default SearchBar;
