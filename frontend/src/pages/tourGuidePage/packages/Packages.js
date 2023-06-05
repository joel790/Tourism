import React from "react";
import "./Packages.css";
import MyTable from "../../../components/dataTable/DataTable";

const Package = () => {
  const packageColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Price", selector: "price", sortable: true },
    { name: "Duration", selector: "duration", sortable: true },
    { name: "category", selector: "category", sortable: true},
  ]

  return (
    <div className="MainPackage">
      <MyTable
        apiEndpoint="http://localhost:5000/api/packages"
        title="Packages"
        columns={packageColumns}
        dataKey="package"
      />
    </div>
  );
};

export default Package;
