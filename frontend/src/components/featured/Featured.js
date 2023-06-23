import "./Featured.css";
import HotelService from "../../services/hotelService";
import HomeType from "../../components/hotelType/HomeType";
import FeaturedProperties from "../../components/popular/FeaturedProperties";
const Featured = () => {
  const URL =
    "http://localhost:5000/api/hotels/countbycity?cities=Lalibela,Gondar,Bahir Dar,Addis Abeba";
  const { data, loading, error } = HotelService(URL);
  return (
    <div className="MainFeature">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h3>Featured</h3>
          <div className="featured">
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/443582249.jpg?k=ffb0a7dee03adf77547302821242b0f89d45550bd064d5ab9a16a2d7cba3582b&o=&hp=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Lalibela</h1>
                <h3>{data[0]} properties</h3>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/443560624.jpg?k=9689998ec721b11209a317d896410a0fc6342ed53d5533fa0f7ba06eb8d0c046&o=&hp=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Gondar</h1>
                <h3>{data[1]} properties</h3>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/104724675.jpg?k=a156bf735fb5f3272dce7afbcea2925737ff20b507eb32f55542abbf19030e7d&o=&hp=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Bahir Dar</h1>
                <h3>{data[2]} properties</h3>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/104729886.jpg?k=68b2768c2d2637c4c324e9c08845a9a9de747d4d46e736f09b1c5335eb4e2936&o=&hp=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Addis Abeba</h1>
                <h3>{data[3]} properties</h3>
              </div>
            </div>
          </div>
          <div className="otherContainer">
            <h3>Type</h3>
            <HomeType />
            <h3>Properties</h3>
            <FeaturedProperties />
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
