import React, { useState, useEffect } from "react";
import "../Styles/FirstPage.css";
import bg1 from "../img1/page2bg.png";
import bg2 from "../img1/page2bg2.png";
import logo from "../img/logo.png";
import profilelogo from "../img/profilelogo.png";
import belllogo from "../img/belllogo.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import svgplan from "../img1/svgplan.png";
import scimg1 from "../img1/scimg1.png";
import scimg2 from "../img1/scimg2.png";
import scimg3 from "../img1/scimg3.png";
import mcv1 from "../img1/mcv1.png";
import mcv2 from "../img1/mcv2.png";
import mcv3 from "../img1/mcv3.png";

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
    </div>
  );
};
