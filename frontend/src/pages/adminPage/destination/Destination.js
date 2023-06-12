import React from "react";
import "./Destination.css";
import MyTable from "../../../components/dataTable/DataTable";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";

const Destination = () => {
  const handleEdit = (row) => {
    // Define the logic for handling the edit action
    console.log("Edit action clicked for row:", row);
  };

  const handleDelete = (row) => {
    // Define the logic for handling the delete action
    console.log("Delete action clicked for row:", row);
  };
  const toursColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Location", selector: "location", sortable: true },
    { name: "Description", selector: "description", sortable: true },
    { name: "Category", selector: "category", sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="Actions">
          <RiEditLine
            onClick={handleEdit}
            style={{
              cursor: "pointer",
              marginRight: "18px",
              fontSize: "3rem",
              color: "blue",
            }}
          />
          <AiOutlineDelete
            onClick={handleDelete}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "3rem",
              color: "red",
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="MainTour">
      <MyTable
        apiEndpoint="http://localhost:5000/api/tours"
        title="Tours"
        columns={toursColumns}
        dataKey="tour"
      />
    </div>
  );
};

export default Destination;
