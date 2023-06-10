import React from 'react'
import "./Destination.css"
import MyTable from "../../../components/dataTable/DataTable"

const Destination = () => {
  const toursColumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Location", selector: "location", sortable: true },
    { name: "Description", selector: "description", sortable: true },
    { name: "Category", selector: "category", sortable: true },

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
}

export default Destination