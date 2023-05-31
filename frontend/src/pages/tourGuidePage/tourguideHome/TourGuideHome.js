// TourGuideHome.js

import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./TourGuideHome.css";
import Packages from "../packages/Packages";
import Tourists from "../tourists/Tourist";
import Bookings from "../bookings/Bookings";
import Dashboard from "../dashboard/Dashboard";
import Hotels from "../hotels/Hotels";
import Cars from "../cars/Cars";
import { SidebarData } from "../../../data/Data";

const TourGuideHome = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(SidebarData[0].link);

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
      case "/bookings":
        return (
          <>
            <Bookings />
          </>
        );
      case "/tourists":
        return (
          <>
            <Tourists />
          </>
        );
      case "/packages":
        return (
          <>
            <Packages />
          </>
        );
      case "/hotels":
        return (
          <>
            <Hotels />
          </>
        );
      case "/cars":
        return (
          <>
            <Cars />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="GuideMain">
      <div className="GuideHome">
        <Sidebar onMenuItemClick={handleMenuItemClick} />   
             <div className="content">{renderPageContent()}</div>
      </div>
    </div>
  );
};

export default TourGuideHome;
