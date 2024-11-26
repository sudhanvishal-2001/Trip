import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 } from "uuid";
import { config } from "react-spring";
import scimg1 from "../img1/scimg1.png";
import scimg2 from "../img1/scimg2.png";
import scimg3 from "../img1/scimg3.png";
import mcv1 from "../img1/mcv1.png";
import mcv2 from "../img1/mcv2.png";
import mcv3 from "../img1/mcv3.png";
import '../Styles/Carousel.css';

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow  // Default transition is set to slow
  };

  slides = [
    {
      key: v4(),
      content: <img src={scimg1} alt="1" />
    },
    {
      key: v4(),
      content: <img src={scimg2} alt="2" />
    },
    {
      key: v4(),
      content: <img src={scimg3} alt="3" />
    },
    {
      key: v4(),
      content: <img src={mcv1} alt="4" />
    },
    {
      key: v4(),
      content: <img src={mcv2} alt="5" />
    },
    {
      key: v4(),
      content: <img src={mcv3} alt="6" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div className="car">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={e => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          {/* Removed other transition buttons, keeping only the slow transition */}
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
        </div>
      </div>
    );
  }
}
