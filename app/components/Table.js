import styles from "./Table.module.css";

const Table = ({ data, columns }) => {
  const exampleData = [
    {
      縣市: "台北市",
      區域: "松山區",
      站點名稱: "站點1",
      可借車輛: 10,
      可還空位: 5,
    },
    {
      縣市: "台北市",
      區域: "信義區",
      站點名稱: "站點2",
      可借車輛: 8,
      可還空位: 3,
    },
  ];

  return (
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
        {exampleData.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.tableBodyRow}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} className={styles.tableData}>
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
