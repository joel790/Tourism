import React, { useState } from "react";
import "./Sidebar.css";
import { TbPlaneDeparture } from "react-icons/tb";

import { SidebarData } from "../../data/Data";

const Sidebar = ({ onMenuItemClick }) => {
  const [selected, setSelected] = useState(0);

  const handleMenuItemClick = (link, index) => {
    setSelected(index);
    onMenuItemClick(link);
  };
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="Logo">
        <TbPlaneDeparture size={40} color="blue" />
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
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
