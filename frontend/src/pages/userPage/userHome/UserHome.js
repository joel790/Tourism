import { useState } from "react";
import "./UserHome.css";
import UserNav from "../../../components/header/UserNav";
import Footer from "../../../components/footer/Footer";
import Dashboard from "../dashboard/Dashboard";
import Bookings from "../bookings/Bookings";
import Cars from "../cars/Cars";
import Packages from "../packages/Packages";
import Hotels from "../hotels/Hotels";

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
      <div className="UserContent">
        {renderContents()}
        </div>
      <Footer/>
    </div>
  );
};

export default UserHome;
