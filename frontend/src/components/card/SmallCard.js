import React from "react";
// import * as FaIcons from "react-icons/fa";
import Caar from "./Caar";
import "./SmallCard.css";
import { CardsData } from "../../data/Data";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SmallCard = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Caar
              title={card.title}
              color={card.color}
              barvalue={card.barvalue}
              icon={card.icon}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SmallCard;
