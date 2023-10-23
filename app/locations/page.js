"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Divider from "../components/Divider";
import Title from "../components/Title";
import { fetchYouBikeData } from "../api/ubikeApi";
import Select from "../components/Select";
import SearchBar from "../components/SearchBar";
import styles from "./Location.module.css";
import CheckBoxGroup from "../components/CheckBoxGroup";
import Image from "next/image";
import Table from "../components/Table";

const citys = [
  { id: 1, city: "台北市" },
  { id: 2, city: "新北市" },
  { id: 3, city: "新竹縣" },
  { id: 4, city: "新竹市" },
  { id: 5, city: "新竹科學園區" },
  { id: 6, city: "苗栗縣" },
  { id: 7, city: "台中市" },
  { id: 8, city: "嘉義市" },
  { id: 9, city: "台南市" },
  { id: 10, city: "高雄市" },
  { id: 11, city: "屏東縣" },
];

const options = [
  { id: 1, district: "松山區" },
  { id: 2, district: "信義區" },
  { id: 3, district: "大安區" },
  { id: 4, district: "中山區" },
  { id: 5, district: "中正區" },
  { id: 6, district: "大同區" },
  { id: 7, district: "萬華區" },
  { id: 8, district: "文山區" },
  { id: 9, district: "南港區" },
  { id: 10, district: "內湖區" },
  { id: 11, district: "士林區" },
  { id: 12, district: "北投區" },
];

const page = () => {
  const [youbikeData, setYouBikeData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(citys[0].value);

  useEffect(() => {
    fetchYouBikeData()
      .then((data) => {
        setYouBikeData(data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log(value);
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleSelectCheckBox = (selectedDistricts) => {
    console.log("Selected Districts:", selectedDistricts);
  };

  const columns = ["縣市", "區域", "站點名稱", "可借車輛", "可還空位"];

  return (
    <>
      <Header />
      <Divider />
      <div className={styles.menu}>
        <div className={styles.left}>
          <Title title="站點資訊" />
          <div className={styles.search}>
            <Select
              options={citys}
              selectedValue={selectedOption}
              onSelect={handleSelect}
            />
            <SearchBar onSearch={handleSearch} />
          </div>
          <CheckBoxGroup options={options} onSelect={handleSelectCheckBox} />
        </div>
        <div className={styles.right}>
          <Image
            src="/Frame.svg"
            alt="Logo"
            width={500}
            height={170}
            priority={true}
            className={styles.logo}
          ></Image>
        </div>
      </div>
      <Table data={youbikeData} columns={columns} />
    </>
  );
};

export default page;
