import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import styles from "./CheckBoxGroup.module.css";

const CheckBoxGroup = ({ options, onSelect }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckBoxChange = (district) => {
    const newCheckedItems = { ...checkedItems };
    newCheckedItems[district] = !newCheckedItems[district];
    setCheckedItems(newCheckedItems);
  };

  const handleCheckAllChange = () => {
    const newCheckAll = !checkAll;
    setCheckAll(newCheckAll);

    if (newCheckAll) {
      const allDistricts = options.map((option) => option.district);
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
  }, [checkedItems, onSelect]);

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
        {options.map((option) => (
          <CheckBox
            district={option.district}
            key={option.district}
            checked={checkedItems[option.district] || false}
            onChange={() => handleCheckBoxChange(option.district)}
          />
        ))}
      </div>
    </>
  );
};

export default CheckBoxGroup;
