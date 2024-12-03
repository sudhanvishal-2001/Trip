import React, { useState, useEffect } from "react";
import "../Styles/FirstPage.css";
import bg1 from "../Assets/page2bg.svg";
import bg2 from "../Assets/page2bg2.svg";
import logo from "../Assets/logo.svg";
import profilelogo from "../Assets/profilelogo.svg";
import belllogo from "../Assets/belllogo.svg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import svgplan from "../Assets/svgplan.svg";
import scimg1 from "../img1/scimg1.png";
import scimg2 from "../img1/scimg2.png";
import scimg3 from "../img1/scimg3.png";
import mcv1 from "../img1/mcv1.png";
import mcv2 from "../img1/mcv2.png";
import mcv3 from "../img1/mcv3.png";
import { MdClose, MdKeyboardDoubleArrowRight } from "react-icons/md";
import ExpandIcon from "../Assets/expand-icon.svg"
import MessageIcon from "../Assets/message-icon.svg"
import SearchIcon from "../Assets/search-icon.svg"
import StarFallIcon from "../Assets/star-fall-icon.svg"
import BulbIcon from "../Assets/bulb-icon.svg"
import CloseIcon from "../Assets/close-icon.svg"
import { CgProfile } from "react-icons/cg";


import ImageSlider from './ImageSlider';  // Import the new ImageSlider component

export const FirstPage = () => {
  const [activeView, setActiveView] = useState("single");
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);
  const [direction, setDirection] = useState("");

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
    setDirection("right"); // Set direction to right
    setCurrentIndexes((prevIndexes) => {
      const data =
        activeView === "single"
          ? cardDetails[0].singlecityview.details
          : cardDetails[1].multicityview.details;
      const updatedIndexes = prevIndexes.map((index) => (index + 1) % data.length);
      return updatedIndexes;
    });

    setTimeout(() => {
      setDirection(""); // Reset direction to allow for smooth animation transition
    }, 500);
  };

  const movePrevious = () => {
    setDirection("left"); // Set direction to left
    setCurrentIndexes((prevIndexes) => {
      const data =
        activeView === "single"
          ? cardDetails[0].singlecityview.details
          : cardDetails[1].multicityview.details;
      const updatedIndexes = prevIndexes.map(
        (index) => (index - 1 + data.length) % data.length
      );
      return updatedIndexes;
    });

    setTimeout(() => {
      setDirection(""); // Reset direction to allow for smooth animation transition
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(moveNext, 4000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeView, currentIndexes]);

  const viewData =
    activeView === "single" ? cardDetails[0].singlecityview.details : cardDetails[1].multicityview.details;

  const backgroundImage = activeView === "single" ? bg1 : bg2;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIcons = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="fp-bg1">
        <img src={backgroundImage} alt="Background 1" />
      </div>
      <img className="fp-logo" src={logo} alt="Logo" />
      <div className="profilelogo"><CgProfile className='CgProfile'/></div>
      {/* <img className="fp-profilelogo" src={profilelogo} alt="Profile Logo" /> */}
      <img className="fp-belllogo" src={belllogo} alt="Bell Logo" />

      <div
          className="toggle-container"
          style={{
            borderColor: activeView === "single" ? "black" : "white",
          }}
        >
          <div
            className={`toggle-button ${activeView === "single" ? "active" : ""}`}
            style={{
              color: activeView === "single" ? "black" : "white",
            }}
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

      <ImageSlider
        viewData={viewData}
        currentIndexes={currentIndexes}
        direction={direction}
      />

      <div className="navigation-buttons">
        <button className="prev-button" onClick={movePrevious}>
          <FaLongArrowAltLeft />
        </button>
        <button className="next-button" onClick={moveNext}>
          <FaLongArrowAltRight />
        </button>
      </div>


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

    <div className="icon-container-side">
      <div className="beforemain">
        <div className="main-icon" style={{ transform: "translateY(0.6rem)" }}>
          <img src={SearchIcon} />
        </div>
      </div>
      </div>
      <div className="icon-container">
        <div className={`additional-icon icon1 ${isExpanded ? "visible bouncing" : ""}`}  >
          <img src={BulbIcon} />
        </div>
        <div className={`additional-icon  icon2 ${isExpanded ? "visible bouncing" : ""}`}  >
          <img src={StarFallIcon} />
        </div>
        <div className="main-icon " style={{ transform: "translateY(-1rem)" }}>
          <img src={MessageIcon} />
        </div>
        <div className={`main-icon ${isExpanded ? "visible " : ""}`} onClick={toggleIcons}>
          <img src={ExpandIcon} />
        </div>
        <div className={`close-icon  ${isExpanded ? "" : "visible"}`} style={{ transform: "translateY(-3rem)" }} onClick={toggleIcons}>
          <img src={CloseIcon} />
        </div>
      </div>

  </div>
    
  );
};
