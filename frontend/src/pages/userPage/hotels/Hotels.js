import React from 'react'
import "./Hotels.css"
import BottomHeader from '../../../components/header/BottomHeader'
import Featured from '../../../components/featured/Featured'

const Hotels = () => {
  return (
    <div className='MainHotel'>
      <BottomHeader />
      <div className="HotelContainer">
      <Featured/>  
      </div>   
     </div>
  )
}

export default Hotels