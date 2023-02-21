import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";
import "../styles/style.css";

const Homepage = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="main">
        {data.map((obj) => {
          return <Picture imgAndPhotograph={obj} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
