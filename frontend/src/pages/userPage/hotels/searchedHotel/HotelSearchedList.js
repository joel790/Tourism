import "./HotelSearchedList.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import HotelSearchedResult from "./HotelSearchedResult";
import HotelService from "../../../../services/HotelService";
import Loader from "../../../../components/loader/Loader";

const HotelSearchedList = ({ searchParams }) => {
  const [destination, setDestination] = useState(searchParams.destination);
  const [date, setDate] = useState(searchParams.date);
  const [options, setOptions] = useState(searchParams.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  // const [showDetail, setShowDetail] = useState(false);
  const url = `http://localhost:5000/api/hotels?city=${destination}&min=${
    min || 0
  }&max=${max || 2000}`;

  const { data, loading } = HotelService(url);
  console.log(data);
  return (
    <div className="MainContainer">
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination(Camel Case)</label>
              <input
                placeholder={destination}
                type="text"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        adult: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        children: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        room: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <div className="verticalScrollContainer">
              {loading ? (
                <Loader />
              ) : (
                <>
                  {data.map((item) => (
                    <HotelSearchedResult item={item} key={item} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchedList;
