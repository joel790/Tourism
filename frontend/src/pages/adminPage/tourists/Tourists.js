import React from "react";
import "./Tourists.css";
import MyTable from "../../../components/dataTable/DataTable";
import { AiOutlineDelete } from "react-icons/ai";
import { RxEyeOpen } from "react-icons/rx";
const Tourists = () => {
  const handleEdit = (row) => {
    // Define the logic for handling the edit action
    console.log("Edit action clicked for row:", row);
  };

  const handleDelete = (row) => {
    // Define the logic for handling the delete action
    console.log("Delete action clicked for row:", row);
  };
  const Usercolumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Email", selector: "email", sortable: true },
    { name: "Role", selector: "role", sortable: true },
    { name: "Phone", selector: "phone", sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="Actions">
          <RxEyeOpen
            onClick={handleEdit}
            style={{
              cursor: "pointer",
              marginRight: "18px",
              fontSize: "3rem",
              color: "green",
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
    <div className="MainTourist">
      <MyTable
        apiEndpoint="http://localhost:5000/api/users"
        title="Tourists"
        columns={Usercolumns}
        dataKey="user"
      />
    </div>
  );
};

export default Tourists;
