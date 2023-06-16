import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "./MyTable.css";
import Loader from "../loader/Loader";
const MyTable = ({ apiEndpoint, title, columns, dataKey }) => {
  const [isLoading, setIsLoading] = useState(true);
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
          <button className="add-button">Add +</button>
          <h1Tags>Total:{data.length}</h1Tags>
          <input
            type="text"
            placeholder="Search by name"
            value={searchText}
            onChange={handleSearch}
            className="search-input"
          />

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
    </div>
  );
};

export default MyTable;
