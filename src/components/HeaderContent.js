import React from "react";

const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="left-part">
        <h1>Discover</h1>
        <p>Popular courses from amazing creator on teachable</p>
        <span>
          <i className="fa-solid fa-arrow-down-long"></i>
          Explore teachable Discover
        </span>
      </div>
      <div className="right-part">
        <div className="right-part-container"></div>
        <div className="box">
          <div className="author-name">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
