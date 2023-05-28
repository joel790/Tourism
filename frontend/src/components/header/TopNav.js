import React from 'react';
import "./TopNav.css"
import {AiOutlineMail} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
const TopNav = () => {
  return (
    <div className='TopNav'>
     <div className='icons'>
      <AiOutlineMail/>
      <IoMdNotificationsOutline/>
     </div>
    </div>
  )
}

export default TopNav;