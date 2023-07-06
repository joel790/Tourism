// import "/HotelDetail.css";

const HotelDetail = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214125209.jpg?k=33aa63dbb908608a6b16457175610ffb4372fd61a73970e3f2b00251ff68d89a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214125209.jpg?k=33aa63dbb908608a6b16457175610ffb4372fd61a73970e3f2b00251ff68d89a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214125209.jpg?k=33aa63dbb908608a6b16457175610ffb4372fd61a73970e3f2b00251ff68d89a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214125209.jpg?k=33aa63dbb908608a6b16457175610ffb4372fd61a73970e3f2b00251ff68d89a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214125209.jpg?k=33aa63dbb908608a6b16457175610ffb4372fd61a73970e3f2b00251ff68d89a&o=&hp=1",
    },
  ];
  return (
    <div className="hotelContainer">
      <div className="hotelWrapper"></div>
      <h1 className="hotelTitle">Palm Palace</h1>
      <div className="hotelAddress">
        {/* icon location */}
        <spa>Kebele 6 East -Saint George church</spa>
      </div>
      <span className="hotelDistance">Located-500m from center</span>
      <span className="hotelPriceHighlight">
        Book A stay over $200 and get free Airport taxi
      </span>
      <div className="HotelImages">
        {photos.map((photo) => (
          <div className="hotelImpWrapper">
            <img src={photo.src} alt="Hotel" className="hotelImg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetail;
