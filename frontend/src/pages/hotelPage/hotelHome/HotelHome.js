import TopNav from "../../../components/header/TopNav";
import Sidebar from "../../../components/sidebar/Sidebar";
import { HotelSidebarData } from "../../../data/Data";
import React, { useState } from "react";

import "./HotelHome.css";
const HotelHome = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    HotelSidebarData[0].link
  );
  const role = "hotel";
  const handleMenuItemClick = (link) => {
    setSelectedMenuItem(link);
  };
  return (
    <div className="HotelHome">
      <Sidebar {...{ role }} onMenuItemClick={handleMenuItemClick} />
      <div className="content">
        <TopNav />
        <div className="container">
          <h1>HotelHome content page </h1>
        </div>
      </div>
    </div>
  );
};

export default HotelHome;
