import React from "react";
import { SiEthiopianairlines } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Home.css";
import heroImg from "../../assets/tourism.jpg";
const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">
          <SiEthiopianairlines size={40} />
          <span>TMS</span>
        </div>
        <ul className="homeLinks">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button className="loginbtn">
              <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      </nav>
      {/* hero section */}
      <section className="heroSection">
        <div className="Section-text">
          <h1 className="h1tag"> Ethiopia Tourism Management Solution</h1>
          <div className="pbefore">
            <div >  
            </div>
            <p>
              A tourism management system is a software solution that helps
              tourism businesses manage their operations and services more
              efficiently. It typically includes features for booking and
              reservations, customer relationship management, tourist information
              management , payment or financial management , travel related
              service management and since Ethiopia has very amazing tourist
              destinations it is better to have such like solutions to manage the
              places and heritages .
            </p>
          </div>
          <div className="bottomDesc">
          <div className="secondary-button">
            <button >
              <Link to="/login">See More</Link>
            </button>
          </div>
          <div className="nums">
            <NumberText num="600k+" text="Tourists/year" />
            <NumberText num="$400M+" text="Anual earning" />
          </div>
        </div>
        </div>
        <div className="image">
          <img src={heroImg} alt="Tourism" />
          
        </div>
      </section>
      
    </div>
  );
};


const NumberText = ({ num, text }) => {
  return (
    <div >
      <h3 >{num}</h3>
      <p >{text}</p>
    </div>
  );
};
export default Home;
