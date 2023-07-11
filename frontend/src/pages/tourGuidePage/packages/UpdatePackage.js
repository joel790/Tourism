import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "./updatePackage.css";

const UpdatePackage = ({ isOpen, onRequestClose, packageId, initialData}) => {
    const [name, setName] = useState(initialData.name);
    const [guides, setGuides] = useState(initialData.guides);
    const [selectedGuides, setSelectedGuides] = useState(initialData.guides);
    const [price, setPrice] = useState(initialData.price);
    const [duration, setDuration] = useState(initialData.duration);
    const [createdBy, setCreatedBy] = useState(initialData.createdBy);
    const [description, setDescription] = useState(initialData.description);
    const [location, setLocation] = useState(initialData.location);
    const [category, setCategory] = useState(initialData.category);
    const [priceDiscount, setPriceDiscount] = useState(initialData.priceDiscount);

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

  const handleUpdate = () => {
    const packageData = {
      name,
      guides: selectedGuides,
      price,
      duration,
      createdBy,
      description,
      location,
      category,
      priceDiscount,
    };

    axios
      .put(`http://localhost:5000/api/packages/${packageId}`, packageData)
      .then((response) => {
        toast.success("Package updated successfully");
        onRequestClose();
      })
      .catch((error) => {
        console.error("Error updating package:", error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="update-package-modal"
      overlayClassName="update-package-modal-overlay"
    >
      <h2 className="update-package-title">Update Package</h2>
      <form className="update-package-form">
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

        <div className="upbuttons">
          <button
            type="button"
            onClick={handleUpdate}
            className="update-package-button"
          >
            Update
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            className="update-package-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdatePackage;
