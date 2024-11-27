import React from "react";
import Card from "react-bootstrap/Card";
import { FaLink } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { ImArrowUpRight } from "react-icons/im";
import { IoTelescope } from "react-icons/io5";
import { IoFootstepsSharp } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { useSpring, animated } from "react-spring";


const ImageSlider = ({ viewData, currentIndexes, direction }) => {
  return (
    <div className="co-card">
      <Card className="card1">
        <Card.Img
          className={`moving-image direction-${direction}`} // direction changes based on navigation
          variant="top"
          src={viewData[currentIndexes[0]].img}
          alt={viewData[currentIndexes[0]].title}
        />
      </Card>

      <Card className="card2">
        <Card.Img
          className={`moving-image direction-${direction}`}
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
          <div className="card-icons1"><FaLink /></div>
          <div className="card-icons2"><FaRegBookmark /></div>
          <div className="card-icons3"><ImArrowUpRight /></div>
        </Card.Body>
      </Card>

      <Card className="card3">
        <Card.Img
          className={`moving-image direction-${direction}`}
          variant="top"
          src={viewData[currentIndexes[2]].img}
          alt={viewData[currentIndexes[2]].title}
        />
      </Card>
    </div>
  );
};

export default ImageSlider;
