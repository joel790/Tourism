import React, { useState } from "react";
// import axios from "axios";
// import { RiEditLine } from "react-icons/ri";
// import { AiOutlineDelete } from "react-icons/ai";
// import AddButton from "../../../components/AddButton/AddButton";
// import Update from "../../../components/AddButton/Update";
// import MyTable from "../../../components/dataTable/DataTable";

// import { BookingData } from "../../../data/Data";
import "./Booking.css";

const Bookings = () => {
  //   const [showAdd, setShowAdd] = useState(false);
  //   const [updateData, setUpdateData] = useState(false);
  //   const [bookingData, setBookingData] = useState({
  //     tourguideName: "",
  //     tourPlace: "",
  //     date: "",
  //     status: "",
  //     numberofpeople: "",
  //     contactNumber: "",
  //   });

  //   const bookingColumns = [
  //     { name: "ID", selector: "id", sortable: true },
  //     { name: "Name", selector: "tourguideName", sortable: true },
  //     { name: "Location", selector: "tourPlace", sortable: true },
  //     { name: "Description", selector: "date", sortable: true },
  //     { name: "Category", selector: "numberofpeople", sortable: true },
  //     { name: "Category", selector: "contactNumber", sortable: true },
  //     {
  //       name: "Actions",
  //       cell: (row) => (
  //         <div className="Actions">
  //           <RiEditLine
  //             onClick={() => handleEdit(row)}
  //             style={{
  //               cursor: "pointer",
  //               marginRight: "18px",
  //               fontSize: "2rem",
  //               color: "black",
  //             }}
  //           />
  //           <AiOutlineDelete
  //             onClick={() => handleDelete(row)}
  //             style={{
  //               cursor: "pointer",
  //               marginRight: "10px",
  //               fontSize: "2rem",
  //               color: "black",
  //             }}
  //           />
  //         </div>
  //       ),
  //     },
  //   ];

  //   const handleAddUser = () => {
  //     setShowAdd(true);
  //     setUpdateData(false);
  //   };

  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setBookingData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleAddSuccess = () => {
  //     setShowAdd(false);
  //     setBookingData({
  //       tourguideName: "",
  //       tourPlace: "",
  //       date: "",
  //       status: "pending",
  //       numberofpeople: "",
  //       contactNumber: "",
  //     });
  //   };

  //   const handleEdit = (row) => {
  //     setUpdateData(true);
  //     setShowAdd(false);
  //     setBookingData(row);
  //   };

  //   const handleDelete = (row) => {
  //     axios
  //       .delete(`http://localhost:5000/api/bookings/${row.id}`)
  //       .then((response) => {
  //         console.log("Data deleted successfully:", response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting data:", error);
  //       });
  //   };

  return (
    // <div className="MainBooking">
    //   {showAdd && (
    //     <div className="add-tour-popup">
    //       <input
    //         type="text"
    //         placeholder="TourguideName"
    //         name="name"
    //         value={bookingData.name}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         type="text"
    //         placeholder="tourPlace"
    //         name="name"
    //         value={bookingData.tourPlace}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         type="date"
    //         placeholder="date"
    //         name="date"
    //         value={bookingData.date}
    //         onChange={handleInputChange}
    //       />

    //       <input
    //         type="number"
    //         placeholder="numberofpeople"
    //         name="numberofpeople"
    //         value={bookingData.numberofpeople}
    //         onChange={handleInputChange}
    //       ></input>
    //       <input
    //         type="number"
    //         placeholder="contactNumber"
    //         name="contactNumber"
    //         value={bookingData.contactNumber}
    //         onChange={handleInputChange}
    //       ></input>
    //       <AddButton
    //         apiEndpoint="http://localhost:5000/api/bookings"
    //         dataToAdd={bookingData}
    //         onSuccess={handleAddSuccess}
    //       />
    //     </div>
    //   )}
    //   {updateData && (
    //     <div className="add-tour-popup">
    //       <input
    //         type="text"
    //         placeholder="TourguideName"
    //         name="name"
    //         value={bookingData.name}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         type="text"
    //         placeholder="tourPlace"
    //         name="name"
    //         value={bookingData.tourPlace}
    //         onChange={handleInputChange}
    //       />
    //       <input
    //         type="date"
    //         placeholder="date"
    //         name="date"
    //         value={bookingData.date}
    //         onChange={handleInputChange}
    //       />

    //       <input
    //         type="number"
    //         placeholder="numberofpeople"
    //         name="numberofpeople"
    //         value={bookingData.numberofpeople}
    //         onChange={handleInputChange}
    //       ></input>
    //       <input
    //         type="number"
    //         placeholder="contactNumber"
    //         name="contactNumber"
    //         value={bookingData.contactNumber}
    //         onChange={handleInputChange}
    //       ></input>

    //       <Update
    //         apiEndpoint={`http://localhost:5000/api/booking/${bookingData.id}`}
    //         dataToUpdate={bookingData}
    //         onSuccess={handleAddSuccess}
    //       />
    //     </div>
    //   )}
    //   {!showAdd && !updateData && (
    //     <>
    //       <button className="add-user-button" onClick={handleAddUser}>
    //         Add +
    //       </button>
    //       <MyTable
    //         apiEndpoint="http://localhost:5000/api/bookings"
    //         title="Bookings"
    //         columns={bookingColumns}
    //         dataKey="bookings"
    //       />
    //     </>
    //   )}
    // </div>
    <h1>ehello booking</h1>
  );
};

export default Bookings;
