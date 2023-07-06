import React, { useState } from "react";
import "./Hotels.css";
import CountByCity from "./cities/CountByCity";
import BottomHeader from "../../../components/header/BottomHeader";
import HotelSearchedList from "./searchedHotel/HotelSearchedList";

const Hotels = () => {
  const [showSearchedHotel, setShowSearchedHotel] = useState(false);
  const [searchParams, setSearchParams] = useState({
    destination: "",
    date: [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ],
    options: {
      adult: 1,
      children: 0,
      room: 1,
    },
  });

  const handleSearchClick = () => {
    setShowSearchedHotel(true);
  };

  return (
    <div className="MainHotel">
 
    <div className="HotelContent">
      {showSearchedHotel ? (
        <HotelSearchedList searchParams={searchParams} />
      ) : (
        <>
        <BottomHeader
        onSearchClick={handleSearchClick}
        setShowSearchedHotel={setShowSearchedHotel}
        setSearchParams={setSearchParams}
      />
        <CountByCity />
        </>
      )}
    </div>
  </div>
  );
};

export default Hotels;
