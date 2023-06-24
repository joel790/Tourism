import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./TourGuideHome.css";
import Packages from "../packages/Packages";
import Tourists from "../tourists/Tourist";
import Bookings from "../../adminPage/bookings/Bookings";
import Dashboard from "../dashboard/Dashboard";
import Hotels from "../hotels/Hotels";
import Cars from "../cars/Cars";
import { TourGuideSidebarData } from "../../../data/Data";
import Guides from "../guides/Guides";
import TopNav from "../../../components/header/TopNav";

const TourGuideHome = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    TourGuideSidebarData[0].link
  );
  const role = "tourGuide";
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
      case "/guides":
        return (
          <>
            <Guides />
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
        <Sidebar {...{ role }} onMenuItemClick={handleMenuItemClick} />
        <div className="content">
          <TopNav />
          {renderPageContent()}
        </div>
      </div>
    </div>
  );
};

export default TourGuideHome;
