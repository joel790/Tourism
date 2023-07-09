import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Destination.css";
import { BsSearch } from "react-icons/bs";
import DestinationDetail from "./DestinationDetail";

const Destination = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetchDestinations();
  }, []);

  useEffect(() => {
    setFilteredDestinations(
      filterDestinations(destinations, selectedCategory, searchTerm)
    );
  }, [destinations, selectedCategory, searchTerm]);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tours");
      setDestinations(response.data.data.tour);
      setFilteredDestinations(response.data.data.tour);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterDestinations = (destinations, category, searchTerm) => {
    let filtered = destinations;

    if (category !== "All") {
      filtered = filtered.filter(
        (destination) => destination.category === category
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((destination) =>
        destination.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const openDestinationModal = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };
  const images=[
    "https://media.cnn.com/api/v1/images/stellar/prod/150323113025-ethiopia-15.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618",
    "https://media.istockphoto.com/id/1190896518/photo/rare-wildlife-shot-of-a-walia-ibex-simien-mountains-ethiopia.jpg?s=612x612&w=0&k=20&c=XZAl8AvVNnxTmE2w1_pNu0Z2FK0mMJ1Za1q5jDKR5r8=",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Harold_Wilson%27s_grave._St._Mary%27s%2C_Old_Town_-_geograph.org.uk_-_934336.jpg?20110222063930",
    "https://img.sewasew.com/definitions/311cd0b506c94b5fb1d49b8716253393_268_188",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/4a/6a/caption.jpg?w=400&h=300&s=1",
    "https://addisstandard.com/wp-content/uploads/2021/11/Finfinee-oromia-1-768x1024.jpg",

    "https://2.bp.blogspot.com/-Z1Bn_eB3FyQ/WEA2nVbG8uI/AAAAAAAADJE/GvRqKLBn_DofuDxsHu94W_qGE2Z40qVtACLcB/s1600/13906779_868381063267946_431314784435473874_n.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a9/fd/63/getlstd-property-photo.jpg?w=400&h=300&s=1",
    "https://jelford.files.wordpress.com/2011/03/540133_371149122999076_137754156_n.jpg",

    "https://pbs.twimg.com/media/Du38-wcW4AAN-Ea.jpg:large",
  ]

  return (
    <div className="MainDestination">
      <div className="destContainer">
        <header className="TopNavigation">
          <div className="Logo">Explore</div>

          <div className="SearchContainer">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <BsSearch className="SearchIcon" />
          </div>

          <div className="FilterContainer">
            <label htmlFor="categoryFilter"></label>
            <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="International">International</option>
              <option value="Cultural">Cultural</option>
              <option value="Religious">Religious</option>
              <option value="National">National</option>
            </select>
          </div>
        </header>

        <div className="MainContent">
          {filteredDestinations.length === 0 && searchTerm !== "" && (
            <p>No results found! Search for other destinations</p>
          )}

          { filteredDestinations.map((destination,index) => (
            <div
              key={destination._id}
              className="DestinationCard"
              onClick={() => openDestinationModal(destination)}
            >
             <img
                  src={images[index % images.length]} // Assign image by index
                  alt="Destination"
                  className="destImg"
                />
              <div className="Spans">
                <h3 className="dname">{destination.name}</h3>
                <p className="label">
                  Category: <span>{destination.category}</span>
                </p>
                <p className="label">
                  Location: <span>{destination.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedDestination && (
        <DestinationDetail
          destination={selectedDestination}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Destination;
