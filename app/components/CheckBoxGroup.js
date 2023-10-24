import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import styles from "./CheckBoxGroup.module.css";

const CheckBoxGroup = ({ options, onSelect, selectedCity }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkAll, setCheckAll] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const cityFilteredOptions = options.filter(
      (option) => option.city == selectedCity
    );
    setFilteredOptions(cityFilteredOptions);
  }, [selectedCity]);

  const handleCheckBoxChange = (district) => {
    const newCheckedItems = { ...checkedItems };
    newCheckedItems[district] = !newCheckedItems[district];
    setCheckedItems(newCheckedItems);
  };

  const handleCheckAllChange = () => {
    const newCheckAll = !checkAll;
    setCheckAll(newCheckAll);

    if (newCheckAll) {
      const allDistricts = filteredOptions.map((option) => option.district);
      const allChecked = {};
      allDistricts.forEach((district) => {
        allChecked[district] = true;
      });
      setCheckedItems(allChecked);
    } else {
      setCheckedItems({});
    }
  };

  useEffect(() => {
    const selectedDistricts = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );

    onSelect(selectedDistricts);
  }, [checkedItems]);

  return (
    <>
      <div className={styles.checkBoxFormGroup}>
        <label className={styles.selectAll}>
          <input
            type="checkbox"
            id="checkAll"
            checked={checkAll}
            onChange={handleCheckAllChange}
            className={styles.checkBox}
          />
          全部勾選
        </label>
        {filteredOptions.map((option) => (
          <CheckBox
            key={option.id}
            district={option.district}
            checked={checkedItems[option.district] || false}
            onChange={() => handleCheckBoxChange(option.district)}
          />
        ))}
      </div>
    </>
  );
};

export default CheckBoxGroup;
