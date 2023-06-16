import { MdMail, MdNotificationsActive,MdPerson,MdOutlineArrowDropDown } from "react-icons/md";
import { UserNavData } from "../../data/Data";
import { useState } from "react";
import { SiEthiopianairlines } from "react-icons/si";
import "./UserNav.css";

const UserNav = (props) => {
  const { onLinkClick } = props;
  const [selected, setSelected] = useState(0);
  const handleNavClick = (link, index) => {
    setSelected(index);
    onLinkClick(link);
  };
  return (
    <div className="UserNav">
      {/* logo */}
      <div className="Logo">
        <SiEthiopianairlines size={40} color="yellow" />
        <span>TMS</span>
      </div>
      {/* menu */}
      <div className="NavMenu">
        {/* menu item */}
        {UserNavData.map((item, index) => {
          return (
            <div
              className={
                selected === index ? "NavMenuItem actives" : "NavMenuItem"
              }
              key={index}
              onClick={() => handleNavClick(item.link, index)}
            >
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="Profile" >
        <MdPerson size={30} />
        <span>User Name</span>
        <MdOutlineArrowDropDown size={40}  />
        </div>
      </div>
      <div className="Icons">
        <MdMail size={25} />
        <MdNotificationsActive size={25} />
      </div>
    </div>
  );
};

export default UserNav;
