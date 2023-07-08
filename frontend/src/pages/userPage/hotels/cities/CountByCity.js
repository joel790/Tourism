import React, { useState } from "react";
import HotelService from "../../../../services/HotelService";
import HotelType from "../types/HotelType";
import PopularHotel from "../popular/PopularHotel";
import Loader from "../../../../components/loader/Loader";
import HotelCityDetail from "./HotelCityDetail";
import "./CountByCity.css";

const CountByCity = () => {
  const URL = "http://localhost:5000/api/hotels/countbycity";
  const { data, loading, error } = HotelService(URL);

  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (town) => {
    setSelectedCity(town);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCity(null);
    setIsModalOpen(false);
  };

  return (
    <div className="MainFeature">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Cities</h1>
          <div className="featured">
            {data.map((town) => (
              <div
                className="featuredItem"
                key={town.city}
                onClick={() => openModal(town.city)}
              >
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>{town.city}</h1>
                  <h3>{town.count} Hotels</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="otherContainer">
            <h1>Type</h1>
            <HotelType />
            <h1>Popular Hotels</h1>
            <PopularHotel />
          </div>
          <HotelCityDetail
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            city={selectedCity}
          />
        </>
      )}
    </div>
  );
};

export default CountByCity;
