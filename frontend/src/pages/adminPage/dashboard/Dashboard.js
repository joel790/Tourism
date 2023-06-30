import React from "react";
import "./Dashboard.css";
import SmallCard from "../../../components/card/SmallCard";
import AcountController from "../../../components/header/AcountController";
import BasicTable from "../../../data/Data";
import Account from "./Account";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const shown = useSelector((state) => state.accou.isShown);
  return (
    <>
      <div className="MainDashboard">
        {shown && <AcountController />}
        {!shown && (
          <div className="gebb">
            <div className="account">
              <Account />
            </div>
            <div className="card-table">
              <SmallCard />
              <BasicTable />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
