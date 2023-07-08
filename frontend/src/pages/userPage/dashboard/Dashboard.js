import React from "react";
import { FaHotel, FaCar, FaRegSun } from "react-icons/fa";
import DataTable from "react-data-table-component";
import "./Dashboard.css";
const UserDashboard = () => {
  // Sample data for booked history
  const bookedHistory = [
    {
      id: 1,
      bookingType: "Hotel",
      bookingDetails: "Booking details for Hotel 1",
    },
    {
      id: 2,
      bookingType: "Tour Package",
      bookingDetails: "Booking details for Tour Package 1",
    },
    { id: 3, bookingType: "Car", bookingDetails: "Booking details for Car 1" },
    {
      id: 4,
      bookingType: "Hotel",
      bookingDetails: "Booking details for Hotel 1",
    },
    {
      id: 5,
      bookingType: "Tour Package",
      bookingDetails: "Booking details for Tour Package 1",
    },
    { id: 6, bookingType: "Car", bookingDetails: "Booking details for Car 1" },
    {
      id: 7,
      bookingType: "Hotel",
      bookingDetails: "Booking details for Hotel 1",
    },
    {
      id: 8,
      bookingType: "Tour Package",
      bookingDetails: "Booking details for Tour Package 1",
    },
    { id: 9, bookingType: "Car", bookingDetails: "Booking details for Car 1" },
    {
      id: 10,
      bookingType: "Hotel",
      bookingDetails: "Booking details for Hotel 1",
    },
    {
      id: 11,
      bookingType: "Tour Package",
      bookingDetails: "Booking details for Tour Package 1",
    },
    { id: 12, bookingType: "Car", bookingDetails: "Booking details for Car 1" },
    // Add more data as needed
  ];

  const columns = [
    { name: "ID", selector: "id" },
    { name: "Booking Type", selector: "bookingType" },
    { name: "Booking Details", selector: "bookingDetails" },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button className="button" onClick={() => handleView(row)}>
            View
          </button>
          <button className="button" onClick={() => handleDelete(row)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleView = (row) => {
    // Handle view action for the selected row
  };

  const handleDelete = (row) => {
    // Handle delete action for the selected row
  };

  return (
    <div className="mainDashboard">
      <div className="Cards">
        <div className="card">
          <FaHotel className="card-icon" />
          <div className="btexts">
            <h2> Hotels</h2>
            <h3>
              {
                bookedHistory.filter((item) => item.bookingType === "Hotel")
                  .length
              }
            </h3>
          </div>
        </div>

        <div className="card">
          <FaRegSun className="card-icon" />
          <div className="btexts">
            <h2>Tour Packages</h2>
            <h3>
              {
                bookedHistory.filter(
                  (item) => item.bookingType === "Tour Package"
                ).length
              }
            </h3>
          </div>
        </div>
        <div className="card">
          <FaHotel className="card-icon" />
          <div className="btexts">
            <h2>Hotels</h2>
            <h3>
              {
                bookedHistory.filter((item) => item.bookingType === "Hotel")
                  .length
              }
            </h3>
          </div>
        </div>
        <div className="card">
          <FaCar className="card-icon" />
          <div className="btexts">
            <h2>Cars</h2>
            <h3>
              {
                bookedHistory.filter((item) => item.bookingType === "Car")
                  .length
              }
            </h3>
          </div>
        </div>
       
      </div>
      <h1>Booking History</h1>
      <div className="dataTable">
        <DataTable
          columns={columns}
          data={bookedHistory}
          pagination
          highlightOnHover
          paginationRowsPerPageOptions={[7, 10, 15, 20]}
          paginationPerPage={7}
          paginationComponentOptions={{
            rowsPerPageText: "Rows:",
            rangeSeparatorText: "of",
            noRowsPerPage: false,
            selectAllRowsItem: false,
            selectAllRowsItemText: "All",
          }}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
