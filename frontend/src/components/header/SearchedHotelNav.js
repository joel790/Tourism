import "./SearchedHotelNav.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SiEthiopianairlines } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const SearchedHotelNav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user");
  };

  return (
    <div className="MainNav">
      <div className="logo">
        <SiEthiopianairlines size={40} color="yellow" />
        <span onClick={handleClick}>TMS</span>
      </div>
      
      <div>
        <AiOutlineMail size={25} color="white" />
        <IoMdNotificationsOutline size={25} color="white" />
      </div>
    </div>
  );
};

export default SearchedHotelNav;
