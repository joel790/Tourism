import Sidebar from "../../../components/sidebar/Sidebar";
import { AdminSidebarData } from "../../../data/Data";
import React, { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Tourists from "../tourists/Tourists";
import Companies from "../companies/Companies";
import Destination from "../destination/Destination";
import Bookings from "../bookings/Bookings";
import Cars from "../cars/Cars";

import TopNav from "../../../components/header/TopNav";
import "./AdminHome.css";
import Hotels from "../../tourGuidePage/hotels/Hotels";
const AdminHome = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    AdminSidebarData[0].link
  );
  const role = "admin";
  const handleMenuItemClick = (link) => {
    setSelectedMenuItem(link);
  };
  const renderPageContent = () => {
    switch (selectedMenuItem) {
      case "/dashboard":
        return (
          <>
            <Dashboard />
          </>
        );
      case "/booking":
        return (
          <>
            <Bookings />
          </>
        );
      case "/cars":
        return (
          <>
            <Cars />
          </>
        );
      case "/hotels":
        return (
          <>
            <Hotels />
          </>
        );

      case "/tourists":
        return (
          <>
            <Tourists />
          </>
        );
      case "/guideCompany":
        return (
          <>
            <Companies />
          </>
        );
      case "/destination":
        return (
          <>
            <Destination />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="GuideMain">
      <div className="GuideHome">
        <Sidebar {...{ role }} onMenuItemClick={handleMenuItemClick} />
        <div className="content">
          <TopNav />
          {renderPageContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
