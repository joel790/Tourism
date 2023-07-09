import React, { useState } from "react";
import HotelService from "../../../../services/HotelService";
import HotelType from "../types/HotelType";
import PopularHotel from "../popular/PopularHotel";
import Loader from "../../../../components/loader/Loader";
import HotelCityDetail from "./HotelCityDetail";
import "./CountByCity.css";

const CountByCity = () => {
  const URL = "http://localhost:5000/api/hotels/countbycity";
  const { data, loading } = HotelService(URL);

  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array of image URLs
  const images = [
    "https://addisstandard.com/wp-content/uploads/2021/11/Finfinee-oromia-1-768x1024.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/7a/d9/caption.jpg?w=600&h=400&s=1",
    "https://jelford.files.wordpress.com/2011/03/540133_371149122999076_137754156_n.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/4a/6a/caption.jpg?w=400&h=300&s=1",
    "https://whc.unesco.org/uploads/thumbs/site_0018_0016-750-750-20151104173458.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/150323113025-ethiopia-15.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618",
   ];

  const openModal = (city) => {
    setSelectedCity(city);
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
            {data.map((city, index) => (
              <div
                className="featuredItem"
                key={city.city}
                onClick={() => openModal(city.city)}
              >
                <img
                  src={images[index % images.length]} // Assign image by index
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>{city.city}</h1>
                  <h3>{city.count} Hotels</h3>
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
