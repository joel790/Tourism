import { useState } from "react";
import "./UserHome.css";
import UserNav from "../../../components/header/UserNav";
import Footer from "../../../components/footer/Footer";
import Dashboard from "../dashboard/Dashboard";
import Bookings from "../bookings/Bookings";
import Cars from "../cars/Cars";
import Packages from "../packages/Packages";
import Hotels from "../hotels/Hotels";
import { MdMail, MdNotificationsActive,MdPerson,MdOutlineArrowDropDown } from "react-icons/md";

import Destination from "../destinations/Destination";
import { UserNavData } from "../../../data/Data";

const UserHome = () => {
  const [selectedNavLink, setSelectedNavLink] = useState(UserNavData[0].link);

  const handleClick = (link) => {
    setSelectedNavLink(link);
  };
  const renderContents = () => {
    switch (selectedNavLink) {
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

      case "/destinations":
        return (
          <>
            <Destination />
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
    <div className="UserHome">
      <UserNav onLinkClick={handleClick} />
      <div className="Header">
        <h2>Welcome To Ethiopian Tourism management Solution</h2>
        <p>
          You can Search and Book your favorite places...
        </p>
        <div className="Image">
          <p>this is the best web app for tour and travel booking online</p>
        </div>
        <div className="headerSearch">
           <div className="headerSearchItem">
             <MdMail className="headerIcon"/>
             <input type="text" placeholder="Destination"/>
           </div>
           <div className="headerSearchItem">
             <MdMail className="headerIcon"/>
             <span>date to date</span>
           </div>
           <div className="headerSearchItem">
             <MdMail className="headerIcon"/>
             <span>2 adult 2 childern  1 room</span>
           </div>
        </div>
      </div>

      <div className="content">{renderContents()}</div>
      <Footer/>
    </div>
  );
};

export default UserHome;
