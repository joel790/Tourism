import React, { useState } from "react";
import "./Hotels.css";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";
import AddButton from "../../../components/AddButton/AddButton";
import Update from "../../../components/AddButton/Update";
import axios from "axios";
import MyTable from "../../../components/dataTable/DataTable";
const Hotels = () => {
  const hotelColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "City", selector: "city", sortable: true },
    { name: "Address", selector: "address", sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="Actions">
          <RiEditLine
            onClick={() => handleEdit(row)}
            style={{
              cursor: "pointer",
              marginRight: "18px",
              fontSize: "2rem",
              color: "black",
            }}
          />
          <AiOutlineDelete
            onClick={() => handleDelete(row)}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "2rem",
              color: "black",
            }}
          />
        </div>
      ),
    },
  ];
  const [showAdd, setShowAdd] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [hotelData, setHotelData] = useState({
    name: "",
    city: "",
    address: "",
    title: "",
    type: "",
    distance: "",
    rooms: "",
    description: "",
    cheapestPrice: "",
    rating: "",
  });
  const handleChange = (event) => {
    setHotelData((preves) => ({
      ...preves,
      [event.target.name]: event.target.value,
    }));
  };
  const handleAddUser = () => {
    setShowAdd(true);
    setUpdateData(false);
  };
  const handleAddSuccess = () => {
    setShowAdd(false);
    setUpdateData(false);
    setHotelData({
      name: "",
      city: "",
      address: "",
      title: "",
      type: "",
      distance: "",
      rooms: "",
      description: "",
      cheapestPrice: "",
      rating: "",
    });
  };
  const handleEdit = (row) => {
    setUpdateData(true);
    setShowAdd(false);
    setHotelData(row);
  };
  const handleDelete = (row) => {
    axios
      .delete(`http://localhost:5000/api/hotels/${row.id}`)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="MainHotel">
      {showAdd && (
        <div className="add-tour-popup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={hotelData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={hotelData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={hotelData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={hotelData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Type"
            name="type"
            value={hotelData.type}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Distance"
            name="distance"
            value={hotelData.distance}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Rooms"
            name="rooms"
            value={hotelData.rooms}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="description"
            value={hotelData.description}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="CheapestPrice"
            name="cheapestPrice"
            value={hotelData.cheapestPrice}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            value={hotelData.rating}
            onChange={handleChange}
          />
          <AddButton
            apiEndpoint="http://localhost:5000/api/hotels"
            dataToAdd={hotelData}
            onSuccess={handleAddSuccess}
          />
        </div>
      )}
      {updateData && (
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={hotelData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={hotelData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={hotelData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={hotelData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Type"
            name="type"
            value={hotelData.type}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Distance"
            name="distance"
            value={hotelData.distance}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Rooms"
            name="rooms"
            value={hotelData.rooms}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="description"
            value={hotelData.description}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="CheapestPrice"
            name="cheapestPrice"
            value={hotelData.cheapestPrice}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            value={hotelData.rating}
            onChange={handleChange}
          />
          <Update
            apiEndpoint="http://localhost:5000/api/hotels"
            dataToUpdate={hotelData}
            onSuccess={handleAddSuccess}
          />
        </div>
      )}
      {!showAdd && !updateData && (
        <>
          <button className="add-user-button" onClick={handleAddUser}>
            Add +
          </button>
          <MyTable
            apiEndpoint="http://localhost:5000/api/hotels"
            title="Hotels"
            columns={hotelColumns}
            dataKey="hotel"
          />
        </>
      )}
    </div>
  );
};

export default Hotels;
