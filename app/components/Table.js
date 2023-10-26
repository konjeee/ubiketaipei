import styles from "./Table.module.css";
import { citys } from "../data";
import { useEffect, useState } from "react";

const Table = ({ datas, columns, city }) => {
  const [cityName, setCityName] = useState("");
  const [sortedDatas, setSortedDatas] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [isSortAscending, setIsSortAscending] = useState(true);

  useEffect(() => {
    citys.forEach((country) => {
      if (country.city === city) {
        setCityName(country.city);
      }
    });
  }, [city]);

  useEffect(() => {
    const sortedData = [...datas].sort((a, b) => {
      return a.sno - b.sno;
    });
    setSortedDatas(sortedData);
  }, [datas]);

  const compareMixed = (a, b) => {
    const pattern = /^[\d]+$/;

    if (pattern.test(a) && pattern.test(b)) {
      return a - b;
    } else {
      return a.localeCompare(b, "zh-Hans-CN", { sensitivity: "accent" });
    }
  };

  const handleHeaderClick = (key) => {
    if (key === "city") {
      return;
    }

    if (key === sortKey) {
      setIsSortAscending(!isSortAscending);
    } else {
      setIsSortAscending(true);
    }
    setSortKey(key);

    const sortedData = [...sortedDatas].sort((a, b) => {
      const fieldA = key === "city" ? a[key] : a[key];
      const fieldB = key === "city" ? b[key] : b[key];
      if (isSortAscending) {
        return compareMixed(fieldA, fieldB);
      } else {
        return compareMixed(fieldB, fieldA);
      }
    });
    setSortedDatas(sortedData);
  };

  return (
    <div className={styles.tablecontainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={styles.tableHeader}
                onClick={() => handleHeaderClick(column.key)}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {sortedDatas.map((data) => (
            <tr key={data.sno} className={styles.tableBodyRow}>
              <td className={styles.tableData}>{cityName}</td>
              <td className={styles.tableData}>{data.sarea}</td>
              <td className={styles.tableData}>
                {data.sna.replace("YouBike2.0_", "")}
              </td>
              <td className={styles.tableData}>{data.sbi}</td>
              <td className={styles.tableData}>{data.bemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
