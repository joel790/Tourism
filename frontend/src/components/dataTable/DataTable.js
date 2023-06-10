import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "./MyTable.css";
import Loader from "../loader/Loader";
const MyTable = ({ apiEndpoint, title, columns, dataKey }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [tourData, setTourData] = useState({
    name: "",
    category: "",
    location: "",
    description: "",
    images: "",

  });

  const handleAddUser = () => {
    setShowAdd(true);
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
  const handleSave = () => {
    axios
      .post("http://localhost:5000/api/tours", tourData)
      .then((response) => {
        console.log("Tour added:", response.data);
        setShowAdd(false);
      })
      .catch((error) => {
        console.error("Error adding tour:", error);
      });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(apiEndpoint)
      .then((response) => {
        if (Array.isArray(response.data.data[dataKey])) {
          const updatedData = response.data.data[dataKey].map((item) => {
            const { _id, ...rest } = item;
            return {
              ...rest,
              id: _id,
            };
          });

          setData(updatedData);
        } else {
          console.log(
            "Response data is not an array:",
            response.data.data[dataKey]
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [apiEndpoint, dataKey]);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="table-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {showAdd ? (
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
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <>
              <input
                type="text"
                placeholder="Search by name"
                value={searchText}
                onChange={handleSearch}
                className="search-input"
              />
              <button className="add-user-button" onClick={handleAddUser}>
                Add +
              </button>
              {filteredData.length > 0 ? (
                <DataTable
                  title={title}
                  columns={columns}
                  data={filteredData}
                  pagination
                  paginationPerPage={7}
                  paginationRowsPerPageOptions={[7, 10, 15, 20]}
                  highlightOnHover
                  striped
                  defaultFilterMethod={(filter, row) =>
                    String(row[filter.id])
                      .toLowerCase()
                      .includes(filter.value.toLowerCase())
                  }
                  style={{ height: "400px" }}
                  paginationComponentOptions={{
                    rowsPerPageText: "Rows:",
                    rangeSeparatorText: "of",
                    noRowsPerPage: false,
                    selectAllRowsItem: false,
                    selectAllRowsItemText: "All",
                  }}
                />
              ) : (
                <div>No records found</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyTable;
