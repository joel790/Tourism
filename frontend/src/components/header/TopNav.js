import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/tourguide">Tour Guide</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        
      </ul>
    </nav>
  )
}

export default TopNav;