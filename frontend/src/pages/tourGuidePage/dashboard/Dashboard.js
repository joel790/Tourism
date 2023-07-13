import React from 'react';
import { FaSuitcase, FaUser, FaClipboardList, FaClock } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  // Mock data for counts
  const packageCount = 10;
  const guideCount = 5;
  const bookingCount = 20;
  const recentBookings = ['Booking 1', 'Booking 2', 'Booking 3'];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-icon">
            <FaSuitcase />
          </div>
          <div className="card-info">
            <h3>{packageCount}</h3>
            <p>Total Packages</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">
            <FaUser />
          </div>
          <div className="card-info">
            <h3>{guideCount}</h3>
            <p>Total Guides</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">
            <FaClipboardList />
          </div>
          <div className="card-info">
            <h3>{bookingCount}</h3>
            <p>Total Bookings</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">
            <FaClock />
          </div>
          <div className="card-info">
            <h3>{recentBookings.length}</h3>
            <p>Recent Bookings</p>
          </div>
        </div>
      </div>
      <div className="dashboard-recent-bookings">
        <h3>Recent Bookings:</h3>
        <ul>
          {recentBookings.map((booking, index) => (
            <li key={index}>{booking}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
