import React from "react";
import "./Hotels.css";
import MyTable from "../../../components/dataTable/DataTable";
const Hotels = () => {
  const hotelColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Location", selector: "tittle", sortable: true },
    { name: "Description", selector: "type", sortable: true },
    { name: "Category", selector: "city", sortable: true },
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
    <div className="MainHotel">
      <MyTable
        apiEndpoint="http:localhost:5000/api/hotels"
        title="Hotels"
        columns={hotelColumns}
        dataKey="hotel"
      />
    </div>
  );
};

export default Hotels;
