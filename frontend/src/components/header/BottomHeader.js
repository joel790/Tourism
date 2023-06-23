import "./BottomHeader.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { MdPlace } from "react-icons/md";
import { BsCalendarDayFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
const BottomHeader = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOption] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate=useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch=()=>{
    navigate("/user/hotels",{state:{destination,date,options}})
  }
  return (
    <div className="Header">
      <h2>Explore Your Favorite Hotel and Reserve!</h2>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdPlace className="headerIcon" />
          <input type="text" placeholder="Destination" onChange={(e)=>setDestination(e.target.value)} />
        </div>
        <div className="headerSearchItem">
          <BsCalendarDayFill className="headerIcon" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateHolder"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="Date"
            />
          )}
        </div>
        <div className="headerSearchItem">
          <HiUserGroup className="headerIcon" />
          <span
            className="dateHolder"
            onClick={() => setOpenOption(!openOption)}
          >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          {openOption && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                  disabled={options.adult<=1}
                    className="optionBtn"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionNumber">{options?.adult}</span>
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                  disabled={options.children<=0}
                    className="optionBtn"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionNumber">{options?.children}</span>
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                   disabled={options.room<=1}
                    className="optionBtn"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionNumber">{options?.room}</span>
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <button className="headerbutton" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
