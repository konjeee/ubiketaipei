import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import styles from "./CheckBoxGroup.module.css";

const CheckBoxGroup = ({ options, onSelect, selectedCity }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [allChecked, setAllChecked] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const cityFilteredOptions = options.filter(
      (option) => option.city === selectedCity
    );
    setFilteredOptions(cityFilteredOptions);

    const initialCheckedItems = {};
    cityFilteredOptions.forEach((option) => {
      initialCheckedItems[option.district] = option.checked;
    });
    setCheckedItems(initialCheckedItems);
    setAllChecked(true);
  }, [selectedCity]);

  useEffect(() => {
    const selectedDistricts = Object.keys(checkedItems).filter((key) => {
      return checkedItems[key];
    });

    onSelect(selectedDistricts);
  }, [checkedItems, allChecked]);

  const handleCheckBoxChange = (option) => {
    const newFilteredOptions = filteredOptions.map((item) => {
      if (item.id === option.id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });

    setFilteredOptions(newFilteredOptions);

    const newCheckedItems = {};
    newFilteredOptions.forEach((item) => {
      newCheckedItems[item.district] = item.checked;
    });

    setCheckedItems(newCheckedItems);

    const areAllChecked = newFilteredOptions.every((item) => item.checked);
    setAllChecked(areAllChecked);
  };

  const handleCheckAllChange = () => {
    const newChecked = !allChecked;
    setAllChecked((prevAllChecked) => !prevAllChecked);

    const updatedOptions = filteredOptions.map((option) => ({
      ...option,
      checked: newChecked,
    }));

    setFilteredOptions(updatedOptions);

    const newCheckedItems = {};
    updatedOptions.forEach((option) => {
      newCheckedItems[option.district] = newChecked;
    });

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      ...newCheckedItems,
    }));
  };

  return (
    <>
      <div className={styles.checkBoxFormGroup}>
        <label className={styles.selectAll}>
          <input
            type="checkbox"
            id="checkAll"
            checked={allChecked}
            onChange={handleCheckAllChange}
            className={styles.checkboxInput}
          />
          <span className={styles.customCheckbox}></span>
          全部勾選
        </label>
        {filteredOptions.map((option) => (
          <CheckBox
            key={option.id}
            id={option.id}
            district={option.district}
            checked={option.checked}
            onChange={() => handleCheckBoxChange(option)}
          />
        ))}
      </div>
    </>
  );
};

export default CheckBoxGroup;
