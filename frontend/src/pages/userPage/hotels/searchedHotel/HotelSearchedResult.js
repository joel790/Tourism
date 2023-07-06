import React, { useState } from "react";
import "./HotelSearchedResult.css";
import BookingDetail from "./BookingDetail"; // Assuming the BookingDetail component is imported from a file

const HotelSearchedResult = ({ item }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    // Open the popup modal and pass the item as a prop
    setSelectedRoom(null); // Reset selected room
    setIsModalOpen(true);
  };

  return (
    <div className="searchContainer">
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/214125209.jpg?k=33aa63dbb908608a6b16457175610ffb4372fd61a73970e3f2b00251ff68d89a&o=&hp=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.distance}</span>
          <span className="siSubtitle">
            Comfortable Room with air conditioning
          </span>
          <span className="siFeatures">{item.description}</span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="siRating">
              <button>{item.rating}</button>
            </div>
          )}
          <div className="siDetailTexts">
            <span className="siPrice">${item.cheapestPrice}</span>
            <button className="siCheckButton" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BookingDetail item={item} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default HotelSearchedResult;
