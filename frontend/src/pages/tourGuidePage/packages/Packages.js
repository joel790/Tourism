import React, { useState, useEffect } from "react";
import "./Packages.css";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";
import AddButton from "../../../components/AddButton/AddButton";
import Update from "../../../components/AddButton/Update";
import axios from "axios";
import MyTable from "../../../components/dataTable/DataTable";
const Package = () => {
  const packageColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Price", selector: "price", sortable: true },
    { name: "Duration", selector: "duration", sortable: true },
    { name: "category", selector: "category", sortable: true },
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
  const [guideId, setGuideId] = useState([]);
  const [userId, setUserId] = useState([]);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [guides, setGuides] = useState([]);
  const [users, setUsers] = useState([]);
  const [tourData, setTourData] = useState([]);
  const [packageData, setPackageData] = useState({
    name: "",
    price: 0,
    guideId: [],
    userId: [],
    location: "",
    category: "",
    duration: 0,
    description: "",
    ratingsAverage: 0,
    ratingsQuantity: 0,
    images: {},
    priceDiscount: 0,
  });

  const handleAddUser = () => {
    setShowAdd(true);
    setUpdateData(false);
  };
  const handleEdit = (row) => {
    setUpdateData(true);
    setShowAdd(false);
    setPackageData(row);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "guideId") {
      setGuideId(value);
      setPackageData((prevData) => ({
        ...prevData,
        guideId: value,
      }));
    } else if (name === "userId") {
      setUserId(value);
      setPackageData((prevData) => ({
        ...prevData,
        userId: value,
      }));
    } else if (name === "location") {
      setLocation(value);
      setPackageData((prevData) => ({
        ...prevData,
        location: value,
      }));
    } else if (name === "category") {
      setCategory(value);
      setPackageData((prevData) => ({
        ...prevData,
        category: value,
      }));
    } else {
      setPackageData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPackageData((prevData) => ({
      ...prevData,
      images: file,
    }));
  };
  const handleAddSuccess = () => {
    setShowAdd(false);
    setUpdateData(false);
    setPackageData({
      name: "",
      price: 0,
      duration: 0,
      description: "",
      guideId: [],
      userId: [],
      location: "",
      category: "",

      ratingsAverage: 0,
      ratingsQuantity: 0,
      images: {},
      priceDiscount: 0,
    });
  };

  const handleDelete = (row) => {
    axios
      .delete(`http://localhost:5000/api/packages/${row.id}`)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:5000/api/tourGuides").then((response) => {
      setGuides(response.data.data.tourGuide);
    });

    axios.get("http://localhost:5000/api/users").then((response) => {
      setUsers(response.data.data.user);
    });

    axios.get("http://localhost:5000/api/tours").then((response) => {
      setTourData(response.data.data.tour);
    });
  }, []);

  return (
    <div className="MainPackage">
      {showAdd && (
        <div className="add-tour-popup">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={packageData.name}
            onChange={handleInputChange}
          />
          <select name="guideId" value={guideId} onChange={handleInputChange}>
            <option value="">Select Guide</option>
            {guides.map((guide) => (
              <option key={guide._id} value={guide._id}>
                {guide.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="price"
            name="price"
            required
            value={packageData.price}
            onChange={handleInputChange}
          />
          <input
            type="date"
            placeholder="duration"
            name="duration"
            required
            value={packageData.duration}
            onChange={handleInputChange}
          />
          <select
            className="selection"
            name="userId"
            value={userId}
            onChange={handleInputChange}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
          <textarea
            name="description"
            placeholder="description"
            value={packageData.description}
            onChange={handleInputChange}
          ></textarea>
          <select
            className="selection"
            name="location"
            value={location}
            onChange={handleInputChange}
          >
            <option value="">Select Location</option>
            {tourData.map((tour) => (
              <option key={tour._id} value={tour.location}>
                {tour.location}
              </option>
            ))}
          </select>

          <select
            className="selection"
            name="category"
            value={category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            {tourData.map((tour) => (
              <option key={tour._id} value={tour.category}>
                {tour.category}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="ratingsAverage"
            name="ratingsAverage"
            value={packageData.ratingsAverage}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="ratingsQuantity"
            name="ratingsQuantity"
            value={packageData.ratingsQuantity}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="priceDiscount"
            name="priceDiscount"
            value={packageData.priceDiscount}
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="images"
            accept="image/*"
            onChange={handleFileChange}
          />

          <AddButton
            apiEndpoint="http://localhost:5000/api/packages"
            dataToAdd={packageData}
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
            value={packageData.name}
            onChange={handleInputChange}
          />
          <select
            className="selection"
            value={guideId}
            onChange={(e) => setGuideId(e.target.value)}
          >
            <option value="">Select Guide</option>
            {guides.map((guide) => (
              <option key={guide._id} value={guide._id}>
                {guide.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="price"
            name="price"
            required
            value={packageData.price}
            onChange={handleInputChange}
          />
          <input
            type="date"
            placeholder="duration"
            name="duration"
            required
            value={packageData.duration}
            onChange={handleInputChange}
          />
          <select
            className="selection"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
          <textarea
            name="description"
            placeholder="description"
            value={packageData.description}
            onChange={handleInputChange}
          ></textarea>
          <select
            className="selection"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {tourData.map((tour) => (
              <option key={tour._id} value={tour.location}>
                {tour.location}
              </option>
            ))}
          </select>

          <select
            className="selection"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {tourData.map((tour) => (
              <option key={tour._id} value={tour.category}>
                {tour.category}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="ratingsAverage"
            name="ratingsAverage"
            value={packageData.ratingsAverage}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="ratingsQuantity"
            name="ratingsQuantity"
            value={packageData.ratingsQuantity}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="priceDiscount"
            name="priceDiscount"
            value={packageData.priceDiscount}
            onChange={handleInputChange}
          />
          <input type="file" name="images" onChange={handleFileChange} />
          <Update
            apiEndpoint="http://localhost:5000/api/packages"
            dataToUpdate={packageData}
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
            apiEndpoint="http://localhost:5000/api/packages"
            title="Packages"
            columns={packageColumns}
            dataKey="package"
          />
        </>
      )}
    </div>
  );
};

export default Package;
