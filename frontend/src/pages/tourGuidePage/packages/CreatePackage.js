import React, { useState, useEffect } from "react";
import axios from "axios";

import "./createPackage.css"; // Import the CSS file for styling
import { toast } from "react-toastify";

const CreatePackage = () => {
  const [name, setName] = useState("");
  const [guides, setGuides] = useState([]);
  const [selectedGuides, setSelectedGuides] = useState([]);
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [createdBy, setCreatedBy] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [priceDiscount, setPriceDiscount] = useState(0);

  useEffect(() => {
    // Fetch guides from the backend API
    axios
      .get("http://localhost:5000/api/tourguides")
      .then((response) => {
        setGuides(response.data.data.tourGuide);
      })
      .catch((error) => {
        console.error("Error fetching guides:", error);
      });
  }, []);

  const handleGuideChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedGuides(selectedValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedGuideNames = selectedGuides.map((guideId) => {
      const guide = guides.find((guide) => guide._id === guideId);
      return guide ? guide.name : "";
    });
  
    const packageData = {
      name,
      guides: selectedGuideNames,
      price,
      duration,
      createdBy,
      description,
      location,
      category,
      priceDiscount,
    };
  

    axios
      .post("http://localhost:5000/api/packages", packageData)
      .then(() => {
       toast.success("Package Created Successfully...");
        setName("");
        setSelectedGuides([]);
        setPrice(0);
        setDuration(0);
        setCreatedBy("");
        setDescription("");
        setLocation("");
        setCategory("");
        setPriceDiscount(0);
      })
      
      .catch((error) => {
        console.error("Error creating package:", error);
      });
  };

  return (
    <div className="create-package-container">
      <div className="cptop">
      <span className="pspan">Create Package</span>
      </div>
      
      <form onSubmit={handleSubmit}>
        <label className="form-label">Name:</label>
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label className="form-label">Guides:</label>
        <select
          className="form-select"
          multiple
          value={selectedGuides}
          onChange={handleGuideChange}
        >
          {guides.length > 0 ? (
            guides.map((guide) => (
              <option key={guide._id} value={guide._id}>
                {guide.name}
              </option>
            ))
          ) : (
            <option disabled>No guides available</option>
          )}
        </select>

        <label className="form-label">Price:</label>
        <input
          className="form-input"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label className="form-label">Duration:</label>
        <input
          className="form-input"
          type="number"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />

        <label className="form-label">Created By:</label>
        <input
          className="form-input"
          type="text"
          value={createdBy}
          onChange={(event) => setCreatedBy(event.target.value)}
        />

        <label className="form-label">Description:</label>
        <input
          className="form-input"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label className="form-label">Location:</label>
        <input
          className="form-input"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <label className="form-label">Category:</label>
        <input
          className="form-input"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <label className="form-label">Price Discount:</label>
        <input
          className="form-input"
          type="number"
          value={priceDiscount}
          onChange={(event) => setPriceDiscount(event.target.value)}
        />

        <button className="submit-button" type="submit">
          Create Package
        </button>
      </form>
    </div>
  );
};

export default CreatePackage;
