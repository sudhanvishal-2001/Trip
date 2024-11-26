import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../Styles/FirstPage.css";
import bg1 from "../img1/page2bg.png";
import bg2 from "../img1/page2bg2.png";
import logo from "../img/logo.png";
import profilelogo from "../img/profilelogo.png";
import belllogo from "../img/belllogo.png";
import scimg1 from "../img1/scimg1.png";
import scimg2 from "../img1/scimg2.png";
import scimg3 from "../img1/scimg3.png";
import mcv1 from "../img1/mcv1.png";
import mcv2 from "../img1/mcv2.png";
import mcv3 from "../img1/mcv3.png";
import linkicon from "../img1/linkicon.png";
import svgplan from "../img1/svgplan.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoFootstepsSharp } from "react-icons/io5";
import { IoTelescope } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { ImArrowUpRight } from "react-icons/im";
import { MdKeyboardDoubleArrowRight ,MdClose} from "react-icons/md";
import { useSpring, animated } from "react-spring";


import Carousel  from './Carousel';

export const FirstPage = () => {
  const [activeView, setActiveView] = useState("single");
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);
  

  const cardDetails = [
    {
      singlecityview: {
        bg: "bg1", 
        details: [
          {
            img: scimg1,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Kyoto, Japan",
            views: "10000",
            visits: "1.33M",
            link: "5",
          },
          {
            img: scimg2,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Osaka, Japan",
            views: "20000",
            visits: "1.5M",
            link: "4",
          },
          {
            img: scimg3,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Hiroshima, Japan",
            views: "30000",
            visits: "850,000",
            link: "3",
          },
        ],
      },
    },
    {
      multicityview: {
        bg: "bg2",
        details: [
          {
            img: mcv1,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Reo, Japan",
            views: "10000",
            visits: "1.35M",
            link: "5",
          },
          {
            img: mcv2,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Kenya, Japan",
            views: "20000",
            visits: "1.5M",
            link: "4",
          },
          {
            img: mcv3,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Hiroshima, Japan",
            views: "30000",
            visits: "850,000",
            link: "3",
          },
        ],
      },
    },
  ];


    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    const closeSidebar = () => {
      setIsOpen(false);
    };
  

  const moveNext = () => {
    setCurrentIndexes((prevIndexes) => {
      const data = activeView === "single" ? cardDetails[0].singlecityview.details : cardDetails[1].multicityview.details;
      return prevIndexes.map((index) => (index + 1) % data.length);
    });
  };

  
  const movePrevious = () => {
    setCurrentIndexes((prevIndexes) => {
      const data = activeView === "single" ? cardDetails[0].singlecityview.details : cardDetails[1].multicityview.details;
      return prevIndexes.map((index) => (index - 1 + data.length) % data.length);
    });
  };

  
  useEffect(() => {
    const interval = setInterval(moveNext, 3000);
    return () => clearInterval(interval);
  }, [activeView]);

    // Get the correct data based on active view
    const viewData =activeView === "single" ? cardDetails[0].singlecityview.details : cardDetails[1].multicityview.details;

    const backgroundImage = activeView === "single" ? bg1 : bg2;

  return (
    <div>
      <div className="fp-bg1">
        <img src={backgroundImage} alt="Background 1" />
      </div>
      <img className="fp-logo" src={logo} alt="Logo" />
      <img className="fp-profilelogo" src={profilelogo} alt="Profile Logo" />
      <img className="fp-belllogo" src={belllogo} alt="Bell Logo" />

      <div className="toggle-container">
        <div
          className={`toggle-button ${activeView === "single" ? "active" : ""}`}
          onClick={() => setActiveView("single")}
        >
          Single City View
        </div>
        <div
          className={`toggle-button ${activeView === "multi" ? "active" : ""}`}
          onClick={() => setActiveView("multi")}
        >
          Multi City View
        </div>
      </div>

      <div className="co-card">
        <Card className="card1">
          <Card.Img
            variant="top"
            src={viewData[currentIndexes[0]].img}
            alt={viewData[currentIndexes[0]].title}
          />
        </Card>

        
        <Card className="card2">
          
          <Card.Img
            variant="top"
            src={viewData[currentIndexes[1]].img}
            alt={viewData[currentIndexes[1]].title}
          />
          
          <Card.Body>
            <div>
                <Card.Title className="card-views"><IoTelescope /> {viewData[currentIndexes[1]].views}</Card.Title>
                <Card.Title className="card-visits"><IoFootstepsSharp /> {viewData[currentIndexes[1]].visits}</Card.Title>
                <Card.Title className="card-links"><GoLocation /> {viewData[currentIndexes[1]].link}</Card.Title>
            </div>
            
            <Card.Title className="card-location"><GoLocation /> {viewData[currentIndexes[1]].location}</Card.Title>
            <Card.Title>{viewData[currentIndexes[1]].title}</Card.Title>
            <div className="card-icons1">
                <FaLink />
            </div>
            <div className="card-icons2">
                <FaRegBookmark />
            </div>
            <div className="card-icons3">
                <ImArrowUpRight />
            </div>

          </Card.Body>
        </Card>

        <Card className="card3">
          <Card.Img
            variant="top"
            src={viewData[currentIndexes[2]].img}
            alt={viewData[currentIndexes[2]].title}
          />
        </Card>
      </div>

      <div className="navigation-buttons">
        <button className="prev-button" onClick={movePrevious}>
          <FaLongArrowAltLeft />
        </button>
        <button className="next-button" onClick={moveNext}>
          <FaLongArrowAltRight />
        </button>
      </div>

        {/* <div className="carousel">
        <Carousel />
        </div> */}

      <div className="fp-pyt">
            <img src={svgplan} alt="direction" />
            <p>Plan Your Trip</p>
      </div>


      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebarcontent">
          <button className="closebtn" onClick={closeSidebar}>
            <MdClose />
          </button>
          <div className="sidebar-contents">
            <div>Beaches</div>
            <div>Deserts</div>
            <div>Mountains</div>
            <div>Iconic cities</div>
          </div>
        </div>
      </div>

      <div className={`sidebararrow ${isOpen ? 'hide' : ''}`} onClick={toggleSidebar}>
        <MdKeyboardDoubleArrowRight className="sidearrowicon" />
      </div>
      
      
    </div>
  );
};
