import React from "react";
import "../styles/style.css";

const Picture = (props) => {
  return (
    <div className="container">
      <div className="imgContainer">
        <img
          className="picture"
          src={props.imgAndPhotograph.src.large}
          alt={props.imgAndPhotograph.photographer}
        />
      </div>
      <p className="photographerName">{props.imgAndPhotograph.photographer}</p>
      {/* <div className="photographerName">
        <p>{props.imgAndPhotograph.photographer}</p> 
      </div> */}
    </div>
  );
};

export default Picture;
