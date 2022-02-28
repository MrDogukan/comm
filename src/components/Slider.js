import React from "react";
import slider1 from "../assets/slider1.jpg";
import "../style/slide.css";

const Slider = () => {
  return (
    <div className="container">
      <figure>
        <img src={slider1} alt="pc" id="mainImg" />
      </figure>
      <div className="thumb_img_list">
        <ul>
          <li>
            <img src={slider1} alt="t1" id="thumb1" />
          </li>
          <li>
            <img src={slider1} alt="t1" id="thumb1" />
          </li>
          <li>
            <img src={slider1} alt="t1" id="thumb1" />
          </li>
          <li>
            <img src={slider1} alt="t1" id="thumb1" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
