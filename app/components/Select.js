//選擇縣市 #aeaeae
//勾勾
import React from "react";
import styles from "./Select.module.css";

const Select = ({ options, selectedValue, onSelect }) => {
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <select
      className={styles.select}
      value={selectedValue}
      onChange={handleChange}
      defaultValue="default"
    >
      <option value="default" style={{ color: "#aeaeae" }} disabled hidden>
        選擇縣市
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.city}
        </option>
      ))}
    </select>
  );
};

export default Select;
