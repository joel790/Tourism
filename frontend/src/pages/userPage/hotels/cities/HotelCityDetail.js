import React from "react";
import Modal from "react-modal";
import "./hotelCityDetail.css";
import HotelService from "../../../../services/HotelService";

Modal.setAppElement("#root");

const HotelCityDetail = ({ isOpen, onRequestClose, city }) => {
  const url = `http://localhost:5000/api/hotels?city=${city}`;
  const { data, loading, } = HotelService(url);
const handleCloseModal = () => {
  onRequestClose();
};
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="hotelCityDetailModal"
      overlayClassName="hotelCityDetailOverlay"
    >
      <div className="modalHeader">
        <h1>{city}: {data.length} Hotels</h1>
        
        <button className="closeIcon" onClick={handleCloseModal}>
          &#10005;
        </button>
      </div>
      <div className="bar"></div>
      <div className="hotelList">
        {loading ? (
          <p>Loading hotels...</p>
        ) : (
          data.map((hotel) => (
            <div className="hotelCard" key={hotel.id}>
              <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                  alt=""
                  className="hotelCardImg"
                />
              <div className="hotelText">
              <h3 className="hotelCardName">{hotel.name}</h3>
              <span>{hotel.description}</span>
              
              <span className="htype">{hotel.type}</span>
              <span>{hotel.distance}</span>
              <span className="price">$ {hotel.cheapestPrice}</span>
              <button className="button">Book Now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </Modal>
  );
};

export default HotelCityDetail;
