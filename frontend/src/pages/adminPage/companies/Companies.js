import React, { useState } from "react";
import MyTable from "../../../components/dataTable/DataTable";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";
import AddButton from "../../../components/AddButton/AddButton";
import axios from "axios";
import "./Companies.css";

import Update from "../../../components/AddButton/Update";
const Companies = () => {
  const CompaniesRegister = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Phone", selector: "phoneNumber", sortable: true },
    { name: "Email", selector: "email", sortable: true },
    { name: "Location", selector: "location", sortable: true },
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
  const [companyData, setCompanyData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
  });

  const handleAddUser = () => {
    setShowAdd(true);
    setUpdateData(false);
  };
  const handleEdit = (row) => {
    setUpdateData(true);
    setShowAdd(false);
    setCompanyData(row);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddSuccess = () => {
    setShowAdd(false);
    setUpdateData(false);
    setCompanyData({
      name: "",
      phoneNumber: "",
      email: "",
      location: "",
    });
  };

  const handleDelete = (row) => {
    axios
      .delete(`http://localhost:5000/api/companies/${row.id}`)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="MainTourist">
      {showAdd && (
        <div className="add-tour-popup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={companyData.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phoneNumber"
            required
            value={companyData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            required
            value={companyData.email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="location"
            name="location"
            required
            value={companyData.location}
            onChange={handleInputChange}
          />

          <AddButton
            apiEndpoint="http://localhost:5000/api/companies"
            dataToAdd={companyData}
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
            required
            value={companyData.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phoneNumber"
            required
            value={companyData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            required
            value={companyData.email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="location"
            name="location"
            required
            value={companyData.location}
            onChange={handleInputChange}
          />
          <Update
            apiEndpoint="http://localhost:5000/api/companies"
            dataToUpdate={companyData}
            onSuccess={handleAddSuccess}
          />
        </div>
      )}
      {!showAdd && !updateData && (
        <>
          <button className="add-user-button" onClick={handleAddUser}>
            Add +
          </button>

          {/* <button onClick={handleDelete}>Delete</button> */}
          <MyTable
            apiEndpoint="http://localhost:5000/api/companies"
            title="Companies"
            columns={CompaniesRegister}
            dataKey="company"
          />
        </>
      )}
    </div>
  );
};

export default Companies;
