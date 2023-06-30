import React, { useEffect, useState } from "react";
// import * as FaIcons from "react-icons/fa";
import Caar from "./Caar";
import axios from "axios";
import { FaUserFriends, FaCarAlt, FaHouseUser } from "react-icons/fa";

import "./SmallCard.css";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SmallCard = () => {
  const [userNumber, setUserNumber] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUserNumber(response.data.data.user.length);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const CardsData = [
    {
      title: "tourists",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, ghostwhite -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barvalue: userNumber,
      icon: <FaUserFriends />,
      series: [
        {
          name: "tourits",
          data: [10, 100, 50, 70, 80, 90],
        },
      ],
    },
    {
      title: "cars",
      color: {
        backGround: "linear-gradient( ghostwhite 0%,ghostwhite 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barvalue: 40,
      icon: <FaCarAlt />,
      series: [
        {
          name: "cars",
          data: [102, 10, 20, 90, 870, 90],
        },
      ],
    },
    {
      title: "hotels",
      color: {
        backGround: "linear-gradient( ghostwhite 0%, ghostwhite 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barvalue: 50,
      icon: <FaHouseUser />,
      series: [
        {
          name: "hotels",
          data: [10, 10, 50, 70, 80, 40],
        },
      ],
    },
  ];
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
