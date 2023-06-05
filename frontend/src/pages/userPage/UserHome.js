import TopNav from "../../components/header/TopNav";
import Sidebar from "../../components/sidebar/Sidebar";
import { UserSidebarData } from "../../data/Data";
import React, { useState } from "react";

import "./UserHome.css";
const UserHome = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    UserSidebarData[0].link
  );
  const role = "user";
  const handleMenuItemClick = (link) => {
    setSelectedMenuItem(link);
  };
  return (
    <div className="UserHome">
      <Sidebar {...{ role }} onMenuItemClick={handleMenuItemClick} />
      <div className="content">
        <TopNav />
        <div className="container">
          <h1>UserHome page </h1>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
