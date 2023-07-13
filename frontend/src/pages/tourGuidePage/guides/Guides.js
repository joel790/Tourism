import React, { useState } from "react";
import "./Guides.css";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";
import MyTable from "../../../components/dataTable/DataTable";
import AddButton from "../../../components/AddButton/AddButton";
import Update from "../../../components/AddButton/Update";
const Guides = () => {
  const Guidecolumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "PhoneNumber", selector: "phoneNumber", sortable: true },
    { name: "Languages", selector: "languages", sortable: true },
    { name: "Tours", selector: "tours", sortable: true },
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
  const [guideData, setGuideData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    languages: [],
    bio: "",
    availability: {
      weekdays: false,
      weekends: true,
    },
    profilePicture: null,
  });
  const handleAddUser = () => {
    setShowAdd(true);
    setUpdateData(false);
  };
  const handleEdit = (row) => {
    setUpdateData(true);
    setShowAdd(false);
    setGuideData(row);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuideData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { name, checked } = e.target;
    setGuideData((prevData) => ({
      ...prevData,
      availability: {
        ...prevData.availability,
        [name]: checked,
      },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setGuideData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };
  const handleAddSuccess = () => {
    setShowAdd(false);
    setUpdateData(false);
    setGuideData({
      name: "",
      email: "",
      phoneNumber: "",
      languages: [],
      bio: "",
      availability: {
        weekdays: false,
        weekends: true,
      },
      profilePicture: null,
    });
  };
  const handleDelete = (row) => {
    axios
      .delete(`http://localhost:5000/api/tourGuides/${row.id}`)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="MainGuides">
      {showAdd && (
        <div className="add-tour-popup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={guideData.name}
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={guideData.email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="PhoneNumber"
            name="phoneNumber"
            value={guideData.phoneNumber}
            onChange={handleInputChange}
          />

          <select
            className="selection"
            name="languages"
            value={guideData.languages}
            onChange={handleInputChange}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="bio"
            placeholder="bio"
            value={guideData.bio}
            onChange={handleInputChange}
          ></textarea>
          <label>weekdays</label>

          <input
            type="checkbox"
            name="weekdays"
            checked={guideData.availability.weekdays}
            onChange={handleAvailabilityChange}
          />
          <label>weekends</label>

          <input
            type="checkbox"
            placeholder="weekends"
            name="weekends"
            checked={guideData.availability.weekends}
            onChange={handleAvailabilityChange}
          />

          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
          />

          <AddButton
            apiEndpoint="http://localhost:5000/api/tourGuides"
            dataToAdd={guideData}
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
            value={guideData.name}
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={guideData.email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="PhoneNumber"
            name="phoneNumber"
            value={guideData.phoneNumber}
            onChange={handleInputChange}
          />

          <select
            className="selection"
            name="languages"
            value={guideData.languages}
            onChange={handleInputChange}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="bio"
            placeholder="bio"
            value={guideData.bio}
            onChange={handleInputChange}
          ></textarea>
          <label>weekdays</label>
          <input
            type="checkbox"
            name="weekdays"
            checked={guideData.availability.weekdays}
            onChange={handleAvailabilityChange}
          />
          <label>weekends</label>

          <input
            type="checkbox"
            name="weekends"
            checked={guideData.availability.weekends}
            onChange={handleAvailabilityChange}
          />

          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
          />

          <Update
            apiEndpoint="http://localhost:5000/api/tourGuides"
            dataToUpdate={guideData}
            onSuccess={handleAddSuccess}
          />
        </div>
      )}
      {!showAdd && !updateData && (
        <>
        <div className="addButton">
          <button className="add-user-button" onClick={handleAddUser}>
            Add +
          </button>
          </div>
          <div className="tableContainer">
          <MyTable
            apiEndpoint="http://localhost:5000/api/tourGuides"
            title="Guides"
            columns={Guidecolumns}
            dataKey="tourGuide"
          />
          </div>
        </>
      )}
    </div>
  );
};

export default Guides;
