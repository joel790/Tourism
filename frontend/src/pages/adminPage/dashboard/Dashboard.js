import React from "react";
import "./Dashboard.css";
import SmallCard from "../../../components/card/SmallCard";
import BasicTable from "../../../data/Data";
const Dashboard = () => {
  return (
    <>
      <div className="MainDashboard">
        <h1>hello</h1>
        <SmallCard />
        <BasicTable />
      </div>
    </>
  );
};

export default Dashboard;
