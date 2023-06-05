import React from 'react';
import "./TopNav.css"
import {AiOutlineMail} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
const TopNav = () => {
  return (
    <div className='TopNav'>
      <AiOutlineMail size={25} color='white'/>
      <IoMdNotificationsOutline size={25} color='white' p/>
    </div>
  )
}

export default TopNav;