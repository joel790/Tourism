import React from 'react'
import "./Tourists.css"
import MyTable from "../../../components/dataTable/DataTable"
const Tourists = () => {
  const Usercolumns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Email", selector: "email", sortable: true },
    { name: "Role", selector: "role", sortable: true },
    { name: "Phone", selector: "phone", sortable: true },
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
}

export default Tourists