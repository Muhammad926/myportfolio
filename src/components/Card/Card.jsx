import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button"><a href="https://github.com/Muhammad926" className="c-anchor">LEARN MORE</a></button> 
    </div>
  );
};

export default Card;
