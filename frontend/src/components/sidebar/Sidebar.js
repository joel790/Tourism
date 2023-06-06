import React, { useState } from "react";
import "./Sidebar.css";
import { TbPlaneDeparture, SiEthiopianairlines} from "react-icons/si";

import {
  TourGuideSidebarData,
  UserSidebarData,
  AdminSidebarData,
} from "../../data/Data";

const Sidebar = (props) => {
  const { role, onMenuItemClick } = props;
  const [selected, setSelected] = useState(0);

  const handleMenuItemClick = (link, index) => {
    setSelected(index);
    onMenuItemClick(link);
  };
  let SidebarData = "";
  if (role === "admin") {
    SidebarData = AdminSidebarData;
  } else if (role === "user") {
    SidebarData = UserSidebarData;
  } else {
    SidebarData = TourGuideSidebarData;
  }

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="Logo">
      <SiEthiopianairlines size={40} color="yellow"/>
        <span>TMS</span>
      </div>
      <hr />
      {/* menu */}
      <div className="menu">
        {/* menu items */}
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleMenuItemClick(item.link, index)}
            >
              <item.icon  />
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
