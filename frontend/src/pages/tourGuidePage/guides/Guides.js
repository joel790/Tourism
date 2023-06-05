import React from 'react'
import "./Guides.css"
import MyTable from '../../../components/dataTable/DataTable';
const Guides = () => {
  const Guidecolumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "PhoneNumber", selector: "phoneNumber", sortable: true },
    { name: "Languages", selector: "languages", sortable: true },
    { name: "Tours", selector: "tours", sortable:true}
  ];
  return (
    <div className="MainGuides">
      <MyTable
        apiEndpoint="http://localhost:5000/api/tourGuides"
        title="Guides"
        columns={Guidecolumns}
        dataKey="tourGuide"
      />
      
    </div>
  );
}

export default Guides
