import React from "react";
import image from "../images/Frame 19.png";
import './features.css'

export default function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={image} alt="features" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>This application software is art</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          voluptas modi placeat, quos quia architecto optio suscipit illum!
          Recusandae eligendi harum quod veritatis nisi quasi! Error alias
          temporibus voluptatum odio, eaque similique ipsa ea beatae, dolore
          illum, soluta dignissimos. Ullam!
        </p>
        <button>View More Features</button>
      </div>
    </div>
  );
}
