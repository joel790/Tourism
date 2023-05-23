import React from "react";
import { SiEthiopianairlines } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Home.css";
import heroImg from "../../assets/tourism.jpg";
const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <SiEthiopianairlines size={40} />
        </div>
        <ul className="home-links">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      </nav>
      {/* hero section */}
      <section className="container hero">
        <div className="hero-text">
          <h1> Ethiopia Tourism Management Solution</h1>
          <p>
            A tourism management system is a software solution that helps
            tourism businesses manage their operations and services more
            efficiently. It typically includes features for booking and
            reservations, customer relationship management, inventory
            management, accounting and billing, marketing and promotions, and
            analytics reporting.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/login">See More</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="600k+" text="Tourists/year"/>
            <NumberText num="$400M+" text="Anual earning"/>

          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Tourism"/>
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};
export default Home;
