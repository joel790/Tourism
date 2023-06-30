import React from "react";
import geb from "../../../assets/IMG_20191227_163739_1~2.jpg";
import { FaAngleDown } from "react-icons/fa";
import "./Account.css";
import { useDispatch, useSelector } from "react-redux";
import { Accountsliceactions } from "../../../redux/features/acountstate/Acountstate";

const Account = () => {
  const dispatch = useDispatch();
  const isopen = useSelector((state) => state.accou.isOpen);

  const isOpendController = () => {
    dispatch(Accountsliceactions.isOpendController());
  };
  const openAccount = () => {
    dispatch(Accountsliceactions.openAccount());
  };

  return (
    <div className="accounts">
      <img
        src={geb}
        style={{ width: "5rem", height: "5rem", borderRadius: "10rem" }}
        alt="no"
      />
      <p style={{ color: "white" }}>gebeyehu</p>
      <button
        style={{
          marginTop: "0.03rem",
          marginLeft: "1rem",
          height: "0.01rem",
          cursor: "pointer",
        }}
        onClick={isOpendController}
      >
        <FaAngleDown />
      </button>
      <div />
      {isopen && (
        <ul className="account-dropdown" style={{ listStyleType: "none" }}>
          <div className="two-list">
            <li>
              <button style={{ height: "1rem" }} onClick={openAccount}>
                my account
              </button>
            </li>
            <br></br>
            <li>
              <button style={{ height: "1rem" }}>logout</button>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Account;
