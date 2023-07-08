import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./destinationDetail.css";
import { FaTimes } from "react-icons/fa";

const DestinationDetail = ({ destination, onClose }) => {
  const carouselImages = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/4a/6a/caption.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1e/bd/4c/historical-site-in-ethiopia.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f1/dd/dd/simien-mountains-national.jpg?w=400&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/85/f1/1f/ethiopia.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4a/b3/7d/danakil-depression.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/cf/05/cf/sof-omer-cave-islamic.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/76/3c/6f/trips-in-ethiopia.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/13/25/d6/medhane-alem-cathedral.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/1e/bd/50/historical-site-in-ethiopia.jpg?w=400&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/46/5a/cd/debre-berham-selassie.jpg?w=400&h=-1&s=1",
  ];

  const handleButtonClick = () => {
    onClose();
  };

  return (
    <div className="destinationDetailContainer">
      <div className="destinationDetailContent">
        <div className="carouselContainer">
          <Carousel infiniteLoop={true}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" className="sImg" />
              </div>
            ))}
          </Carousel>
        </div>

        <h2>Destination Details</h2>
        <span className="dname">Destination: {destination.name}</span>
        <p className="ddesc">Description: {destination.description}</p>
        <p className="ddist">Distance: {destination.distance}</p>

        <FaTimes
          size={20}
          className="cancelButton"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default DestinationDetail;
