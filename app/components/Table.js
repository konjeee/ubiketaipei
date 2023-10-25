import styles from "./Table.module.css";
import { citys } from "../data";
import { useEffect, useState } from "react";

const Table = ({ datas, columns, city }) => {
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    citys.forEach((country) => {
      if (country.city === city) {
        setCityName(country.city);
      }
    });
  }, [city]);

  return (
    <div className={styles.tablecontainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={styles.tableHeader}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
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
