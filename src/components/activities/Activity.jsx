import React from "react";
import { images } from "../../constants";
import "./Activity.css";

const Activity = () => {
  return (
    <div className="activity">
      <h1 className='page-heading'>
        Things you need <span>to do</span>
      </h1>
      <div className="house">
        <img src={images.airoplane} alt="" className="plane" />
        <img src={images.airoplane} alt="" className="plane2" />
        <img src={images.vectorstring} alt="" className="string" />
      </div>
      <p className="subtext">
        We ensure that you’ll embark on a perfectly planned, safe vacation at a
        price you can afford{" "}
      </p>
      
      <div className="activity-info">
        <div className="activity-box">
          <img src={images.click} alt="" />
          <h4>Sign up</h4>
          <p>Completes all the work associated with planning and processing</p>
          <img src={images.graph} alt="" className="graph" />
        </div>
        <div className="activity-box">
          <img src={images.money} alt="" />
          <h4>Worth of Money</h4>
          <p>
            After successful access then book from exclusive deals & pricing
          </p>
          <img src={images.graph1} alt="" className="graph" />
        </div>
        <div className="activity-box">
          <img src={images.travel} alt="" />
          <img src={images.Vector1} alt="" className="vec" />
          <img src={images.Vector2} alt="" className="vec1" />
          <img src={images.Vector3} alt="" className="vec2" />
          <h4>Exciting Travel</h4>
          <p>Start and explore a wide range of exciting travel experience</p>
          <img src={images.graph} alt="" className="graph" />
        </div>
      </div>
    </div>
  );
};

export default Activity;
