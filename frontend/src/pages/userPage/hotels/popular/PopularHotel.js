import HotelService from "../../../../services/HotelService";
import "./PopularHotel.css";

const PopularHotel = () => {
  const URL = "http://localhost:5000/api/hotels?featured=true";
  const { data, loading } = HotelService(URL);
  return (
    <div className="fp">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/99581782.jpg?k=308e9394153442aa1b7df74035304c488daa60fc612b1d0da8846d63f153d43b&o=&hp=1"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PopularHotel;
