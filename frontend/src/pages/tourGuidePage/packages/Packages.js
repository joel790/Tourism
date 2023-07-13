import React, { useState } from "react";
import CreatePackage from "./CreatePackage";
import "./Packages.css";
import MyTable from "../../../components/dataTable/DataTable";
import { AiOutlineDelete } from "react-icons/ai";
import { RiEditLine } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import UpdatePackage from "./UpdatePackage";

const Packages = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const toggleAddPackage = () => {
    setShowAdd(!showAdd);
  };

  const handleEdit = (row) => {
    setSelectedPackage(row);
  };

  const handleDelete = (row) => {
    const packageId = row.id; // Assuming the row object has an "id" property representing the package ID

    // Perform the delete operation (e.g., using axios)
    axios
      .delete(`http://localhost:5000/api/packages/${packageId}`)
      .then((response) => {
        toast.success("Package Deleted Successfully...");
        // Refresh the packages data if needed
      })
      .catch((error) => {
        console.error("Error deleting package:", error);
      });
  };

  const Packagecolumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Location", selector: "location", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Price", selector: "price", sortable: true },
    { name: "Guides", selector: "guides", sortable: true },
    { name: "Creater", selector: "createdBy", sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="Actions">
          <RiEditLine
            onClick={() => handleEdit(row)}
            style={{
              cursor: "pointer",
              marginRight: "18px",
              fontSize: "2rem",
              color: "green",
            }}
          />
          <AiOutlineDelete
            onClick={() => handleDelete(row)}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "2rem",
              color: "red",
            }}
          />
        </div>
      ),
    },
    // Add more columns as needed
  ];

  return (
    <div className="MainPackage">
      <div className="pheaders">
        <span className="ptitle">Packages</span>
        <button onClick={toggleAddPackage} className="pbutton">
          {showAdd ? "Close" : "Add New"}
        </button>
      </div>
      <div className="pcontainer">
        {showAdd ? (
          <CreatePackage />
        ) : (
          <div className="plist">
            {loading ? (
              <span>Loading packages...</span>
            ) : (
              <MyTable
                apiEndpoint="http://localhost:5000/api/packages"
                title="List of Packages"
                columns={Packagecolumns}
                dataKey="packages"
              />
            )}
          </div>
        )}
      </div>
      {selectedPackage && (
        <UpdatePackage
          isOpen={true}
          onRequestClose={() => setSelectedPackage(null)}
          packageId={selectedPackage.id}
          initialData={selectedPackage} // Pass the selectedPackage data as initialData prop
        />
      )}
    </div>
  );
};

export default Packages;
