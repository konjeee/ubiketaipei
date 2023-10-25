import React, { useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";

const Select = ({ options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDefault, setIsDefault] = useState(true);
  const selectRef = useRef(null);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
    setIsDefault(false);
  };

  const handleGlobalClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div ref={selectRef} className={styles.selectWrapper}>
      <div
        className={styles.selectHeader}
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: isDefault ? "#AEAEAE" : "#323232" }}
      >
        {selectedValue}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.id}
              className={styles.option}
              onClick={() => handleSelect(option.city)}
            >
              {option.city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
