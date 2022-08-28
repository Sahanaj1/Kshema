import React from "react";
import './box.css'

function Box(image,button) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={image.image} alt={image.alte} />
      </div>
      <div className="s-b-text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad modi
          placeat animi quod voluptas ab autem dicta soluta, necessitatibus
          culpa ea quo fugiat praesentium eius, explicabo fuga! Repudiandae,
          beatae minima.
        </p>
        <a href='#' className='cv-btn' style={{color:"black"}}>
          {button.button}</a>
      </div>
    </div>
  )
}

export default Box;
