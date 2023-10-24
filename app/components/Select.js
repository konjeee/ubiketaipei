import React, { useState } from "react";
import styles from "./Select.module.css";

const Select = ({ options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDefault, setIsDefault] = useState(true);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
    setIsDefault(false);
  };

  return (
    <div className={styles.selectWrapper}>
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
