import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Packages.css";

const Package = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/packages");
        setPackages(response.data.data.packages);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  const handleBookPackage = (packageId) => {
    // Handle booking logic here
    console.log(`Book package with ID: ${packageId}`);
  };
  const images = [
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
  ];

  return (
    <div className="MainPackage">
        <header className="pheader">
          <div className="plogo">Find Your best...</div>

          <div className="SearchContainer">
            <input
              type="text"
              placeholder="Search tour packages..."
              // value={searchTerm}
              // onChange={handleSearchTermChange}
            />
          </div>

          <div className="FilterContainer">
            <label htmlFor="categoryFilter"></label>
            <select
              id="categoryFilter"
              // value={selectedCategory}
              // onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="International">International</option>
              <option value="Cultural">Cultural</option>
              <option value="Religious">Religious</option>
              <option value="National">National</option>
            </select>
          </div>
        </header>
      <div className="PackageList">
        {Array.isArray(packages) &&
          packages.map((pkg,index) => (
            <div className="Card" key={pkg.id}>
              <img
                className="PackageImage"
                src={images[index % images.length]}
                alt={pkg.name}
              />
              <span className="PackageName">{pkg.name}</span>
              <div
                className="PackageDescription"
                dangerouslySetInnerHTML={{ __html: pkg.description }}
              ></div>
              <button
                className="BookButton"
                onClick={() => handleBookPackage(pkg.id)}
              >
                View
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Package;
