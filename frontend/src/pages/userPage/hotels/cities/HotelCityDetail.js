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
const images=[
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/379181723.jpg?k=00b1c2b6765528e1964645a623102872b21cc08783cc2e6633780c29b0b8b78c&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/379187032.jpg?k=a09a30b58a934c7a4c20478ab05ea98ac7d4ddbdda8f2f87ca62dc608b009bb8&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/379184142.jpg?k=0579456e33817f84eb8abe340413868a6712c1a368c944aa73ffedc7f615fc49&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/104729886.jpg?k=68b2768c2d2637c4c324e9c08845a9a9de747d4d46e736f09b1c5335eb4e2936&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/443582249.jpg?k=ffb0a7dee03adf77547302821242b0f89d45550bd064d5ab9a16a2d7cba3582b&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/475814225.jpg?k=c119c81b3f861baad34d9873238e29463a1c82563d1fdaff54004dacbb94a0db&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/475814309.jpg?k=09e7aa24c867e50f32a0a9725181bb777d9467c35e7a39d527ef00f8da7ef771&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/475814326.jpg?k=e73d73ca905ad1deb5d2e84be6283295237b1391c4eab90fad3bbb773dccf390&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/247522511.jpg?k=fa59f507d8508fb7a40ed53f48012cb0b79efbee5aecef9c2234c24835362eaf&o=&hp=1",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/246271446.jpg?k=33038388d5be49c938100788732e3d1af05a852824ee8c3736db89d54b6a9aa5&o=&hp=1",

];
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
          data.map((hotel,index) => (
            <div className="hotelCard" key={hotel.id}>
               <img
                  src={images[index % images.length]} // Assign image by index
                  alt="Destination"
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
