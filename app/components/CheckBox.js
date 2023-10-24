import React from "react";
import styles from "./CheckBoxGroup.module.css";

const CheckBox = ({ id, district, checked, onChange }) => {
  return (
    <div className={styles.checkBoxForm}>
      <label className={styles.district}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className={styles.checkboxInput}
        />
        <span className={styles.customCheckbox}></span>
        {district}
      </label>
    </div>
  );
};

export default CheckBox;
