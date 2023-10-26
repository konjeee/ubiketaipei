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
import { citys, options, columns } from "../data";

const page = () => {
  const [youbikeData, setYouBikeData] = useState([]);
  const [filteredYoubikeData, setFilteredYoubikeData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("選擇縣市");
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [searchStation, setSearchStation] = useState("");
  const [showCheckBoxGroup, setShowCheckBoxGroup] = useState(false);

  useEffect(() => {
    fetchYouBikeData()
      .then((data) => {
        setYouBikeData(data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedDistricts.length === 0) {
      setFilteredYoubikeData([]);
    } else {
      const filteredData = youbikeData.filter((station) => {
        const districtMatch =
          selectedDistricts.length === 0 ||
          selectedDistricts.includes(station.sarea);

        const stationMatch = station.sna
          .toLowerCase()
          .includes(searchStation.toLowerCase());

        return districtMatch && stationMatch;
      });

      setFilteredYoubikeData(filteredData);
    }
  }, [selectedDistricts, searchStation]);

  const handleSelectCity = (value) => {
    setSelectedCity(value);
    setShowCheckBoxGroup(true);
  };

  const handleSearchStation = (query) => {
    setSearchStation(query);
  };

  const handleSelectCheckBox = (selectedDistricts) => {
    setSelectedDistricts(selectedDistricts);
  };

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
              selectedValue={selectedCity}
              onSelect={handleSelectCity}
            />
            <SearchBar
              onSearch={handleSearchStation}
              siteData={filteredYoubikeData}
            />
          </div>
          {showCheckBoxGroup && (
            <CheckBoxGroup
              options={options}
              onSelect={handleSelectCheckBox}
              selectedCity={selectedCity}
            />
          )}
        </div>
        <div className={styles.right}>
          <Image
            src="../images/frame.svg"
            alt="ubike"
            width={500}
            height={170}
            priority={true}
            className={styles.logo}
          ></Image>
        </div>
      </div>
      <Table
        datas={filteredYoubikeData}
        columns={columns}
        city={selectedCity}
      />
    </>
  );
};

export default page;
