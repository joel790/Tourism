import TopNav from "../../components/header/TopNav";
import Sidebar from "../../components/sidebar/Sidebar";
import { AdminSidebarData } from "../../data/Data";
import React, { useState } from "react";

import "./AdminHome.css";
const AdminHome = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    AdminSidebarData[0].link
  );
  const role = "admin";
  const handleMenuItemClick = (link) => {
    setSelectedMenuItem(link);
  };
  return (
    <div className="AdminHome">
      <Sidebar {...{ role }} onMenuItemClick={handleMenuItemClick} />
      <div className="content">
        <TopNav />
        <div className="container">
          <h1>AdminHome content page </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
