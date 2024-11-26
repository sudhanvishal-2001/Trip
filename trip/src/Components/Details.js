import React from 'react'
import '../Styles/Details.css'
import backgroundImage from "../img1/detailsbg.png";
import backgroundImage1 from "../img1/detailsbg1.png";
import logo from "../img/logo.png";
import profilelogo from "../img/profilelogo.png";
import belllogo from "../img/belllogo.png";
import Slider from './Slider';
import { GoLocation } from "react-icons/go";

export const Details = () => {
  return (
    <div>
        <div className="Details-bg-container">
            <div className='details-bg1'>
                <img src={backgroundImage} alt="Background 1" />
            </div>
            <div className='details-bg2'>
                <img src={backgroundImage1} alt="Background 1" />
            </div>
            <img className="fp-logo" src={logo} alt="Logo" />
            <img className="fp-profilelogo" src={profilelogo} alt="Profile Logo" />
            <img className="fp-belllogo" src={belllogo} alt="Bell Logo" />

            <div className='details-slider'>
                <Slider />
            </div>

            <div className='details-content'>
                <div className='details-title'>
                    <p>Why Japan Suits You</p> 
                    <p className='details-title1'>#Japan</p>
                    <p className='details-title1'>#Best Places</p>
                    </div>
                <div className='details-location'><p><GoLocation /> location</p></div>
                <div className='details-Rating'><p>User Rating</p></div>
                <div className='details-txt'><p>Japan caters to every kind of traveler. If you appreciate serene mountains, the breathtaking hikes in the Japanese Alps await you. Read More..</p></div>
                <div className='details-act'>
                    <div><p>1m+</p>peoples visited</div>
                    <div><p>2k+</p>Activities Available</div>
                    <div><p>5m+</p>Itineraries Available</div>
                </div>
                <div className='details-price'><p>Tentative Budget Starts From</p> <p className='details-price1'>₹ 20 - 25k</p></div>
            </div>
            
      </div>
        
      
    </div>
  )
}
