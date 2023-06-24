import React from "react";
import MyTable from "../../../components/dataTable/DataTable";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";

import "./Booking.css";

const Bookings = () => {
  const bookingColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "tourguideName", sortable: true },
    { name: "Location", selector: "tourPlace", sortable: true },
    { name: "Description", selector: "date", sortable: true },
    { name: "Category", selector: "numberofpeople", sortable: true },
    { name: "Category", selector: "contactNumber", sortable: true },
    // {
    //   name: "Actions",
    //   cell: (row) => (
    //     <div className="Actions">
    //       <RiEditLine
    //         onClick={() => handleEdit(row)}
    //         style={{
    //           cursor: "pointer",
    //           marginRight: "18px",
    //           fontSize: "2rem",
    //           color: "black",
    //         }}
    //       />
    //       <AiOutlineDelete
    //         onClick={() => handleDelete(row)}
    //         style={{
    //           cursor: "pointer",
    //           marginRight: "10px",
    //           fontSize: "2rem",
    //           color: "black",
    //         }}
    //       />
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="MainBooking">
      <MyTable
        apiEndpoint="http:localhost:5000/api/bookings"
        title="Tours"
        columns={bookingColumns}
        dataKey="booking"
      />
    </div>
  );
};

export default Bookings;
