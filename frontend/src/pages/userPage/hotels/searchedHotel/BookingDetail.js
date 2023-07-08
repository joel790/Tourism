import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Bookingdetail.css";
import { FaTimes } from "react-icons/fa";
const BookingDetail = ({ item, onClose }) => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const response = await fetch(`api/room/${item.hotelId}`);
        const data = await response.json();
        setAvailableRooms(data);
      } catch (error) {
        console.error("Error fetching available rooms:", error);
      }
    };

    fetchAvailableRooms();
  }, [item.hotelId]);

  const handleRoomSelection = (event) => {
    const selectedRoomId = event.target.value;
    const selectedRoom = availableRooms.find(
      (room) => room.id === selectedRoomId
    );
    setSelectedRoom(selectedRoom);
  };

  const handleButtonClick = () => {
    onClose();
  };
  const carouselImages = [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/56586079.jpg?k=f13eec051864f404a812e8d4bbb2e688d16a16f2212f8998b40016bdbdea427f&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/276951303.jpg?k=7df11d71870c88e88b6b73aa7d477c96cdf008ae94ebc03f391ce15ca6df97b3&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/174538414.jpg?k=711a4d0323a723e20fb1cf1add6706c083a5ad854ecebb06d14c0793d3736908&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/63030861.jpg?k=97ca989866c391dc20249e707466dd5806177538e3f3dd0e76afc53286f144b8&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/229880538.jpg?k=575b6455a94d78c54b16d2f1e898e7e56dbfa09981f9b63028966e73ee30a125&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214125209.jpg?k=33aa63dbb908608a6b16457175610ffb4372fd61a73970e3f2b00251ff68d89a&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/443552547.jpg?k=bdcd357aa54f4aa7e899bb06f7f4536a1b57e0dd3f69dbf6b963fbf5a10340c9&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/443558991.jpg?k=6fd503be6fa27423d65982bb0efc5c86e5701d464fd79f87eaaae3d706ff0647&o=&hp=1",
  ];
  return (
    <div className="bookingDetailContainer">
      <div className="bookingDetailContent">
        <div className="carouselContainer">
          <Carousel infiniteLoop={true}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" className="sImg" />
              </div>
            ))}
          </Carousel>
        </div>

        <h2>Booking Details</h2>
        <span className="bname">Hotel: {item.name}</span>
        <p className="bdesc">Description: {item.description}</p>
        <p className="bdist">Distance: {item.distance}</p>
        <h1>rooms:{item.rooms}</h1>
        <label htmlFor="roomSelection">Select a Room:</label>
        <select id="roomSelection" onChange={handleRoomSelection}>
          <option value="">Select Room</option>
          {availableRooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>

        {selectedRoom && (
          <div>
            <h4>Selected Room: {selectedRoom.name}</h4>
            <p>Price: {selectedRoom.price}</p>
            <p>Features: {selectedRoom.features}</p>
          </div>
        )}
        <FaTimes
          size={20}
          className=" cancelButton"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default BookingDetail;
