import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";
import MyTable from "../../../components/dataTable/DataTable";

import AddButton from "../../../components/AddButton/AddButton";
import axios from "axios";
import Update from "../../../components/AddButton/Update";
import "./Destination.css";

const Destination = () => {
  const toursColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Location", selector: "location", sortable: true },
    { name: "Description", selector: "description", sortable: true },
    { name: "Category", selector: "category", sortable: true },
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

  const handleAddUser = () => {
    setShowAdd(true);
    setUpdateData(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setTourData((prevData) => ({
        ...prevData,
        images: {
          name: file.name,
          type: file.type,
          size: file.size,
          data: reader.result,
        },
      }));
    };
  };
  const handleAddSuccess = () => {
    setShowAdd(false);
    setTourData({
      name: "",
      category: "",
      location: "",
      description: "",
      images: "",
    });
  };
  const handleEdit = (row) => {
    setUpdateData(true);
    setShowAdd(false);
    setTourData(row);
  };

  const handleDelete = (row) => {
    axios
      .delete(`http://localhost:5000/api/tours/${row.id}`)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="MainTour">
      {showAdd && (
        <div className="add-tour-popup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={tourData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={tourData.location}
            onChange={handleInputChange}
          />
          <input
            type="file"
            placeholder="Images"
            name="images"
            onChange={handleImageChange}
          />
          <select
            className="selection"
            name="category"
            value={tourData.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="International">International</option>
            <option value="National">National</option>
            <option value="Religious">Religious</option>
            <option value="Cultural">Cultural</option>
          </select>
          <textarea
            placeholder="Description"
            name="description"
            value={tourData.description}
            onChange={handleInputChange}
          ></textarea>
          <AddButton
            apiEndpoint="http://localhost:5000/api/tours"
            dataToAdd={tourData}
            onSuccess={handleAddSuccess}
          />
        </div>
      )}
      {updateData && (
        <div className="add-tour-popup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={tourData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={tourData.location}
            onChange={handleInputChange}
          />
          <input
            type="file"
            placeholder="Images"
            name="images"
            onChange={handleImageChange}
          />
          <select
            className="selection"
            name="category"
            value={tourData.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="International">International</option>
            <option value="National">National</option>
            <option value="Religious">Religious</option>
            <option value="Cultural">Cultural</option>
          </select>
          <textarea
            placeholder="Description"
            name="description"
            value={tourData.description}
            onChange={handleInputChange}
          ></textarea>
          <Update
            apiEndpoint={`http://localhost:5000/api/tours${tourData.id}`}
            dataToUpdate={tourData}
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
            apiEndpoint="http://localhost:5000/api/tours"
            title="Tours"
            columns={toursColumns}
            dataKey="tour"
          />
        </>
      )}
    </div>
  );
};

export default Destination;
