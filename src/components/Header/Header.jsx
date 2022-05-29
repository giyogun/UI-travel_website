import React from "react";
import "./Header.css";
import { images } from "../../constants/index";
import { AiFillStar } from "react-icons/ai";
import { BsTrophy } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="header">
      <div className="row1">
        <div className="site-desc">
          <h2 className="big-text">
            Start your exciting <span>journey</span> with us.
          </h2>
          <p className="small-text">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desired place.
          </p>
          <button className="discover">Discover Now</button>
        </div>
        <img src={images.airplanes} alt="" className="airplanes" />
        <div className="circle">
          <img src={images.profile} alt="" />
          <img src={images.circle} alt="" className="header-circle" />
          <div className="reviewed">
            <div className="star">
              <AiFillStar />
            </div>
            <div className="star-text">
              <p className="top-text">27k</p>
              <span className="bottom-text">Customer Reviewed</span>
            </div>
          </div>
          <div className="award">
            <div className="trophy">
              <BsTrophy />
            </div>
            <div className="trophy-text">
              <p className="top-text">Best Tour</p>
              <span>Awards</span>
            </div>
          </div>
          <div className="explore">
            <div className="location">
              {/* <HiLocationMarker /> */}
              <img src={images.maps} alt="" />
            </div>
            <div className="explore-text">
              <p className="top-text">Explore</p>
              <span className="bottom-text">
                Every corner of the world with us
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="row2-items">
          <div className="row2-item">
            <p>Location</p>
            <RiArrowDropDownLine />
          </div>
          <span>Where are you going?</span>
        </div>
        <div className="row2-items">
          <div className="row2-item">
            <p>Date</p>
            <RiArrowDropDownLine />
          </div>
          <span>When will you go?</span>
        </div>
        <div className="row2-items">
          <div className="row2-item">
            <p>Guest</p>
            <RiArrowDropDownLine />
          </div>
          <span>Who are you expecting?</span>
        </div>
        <button className="row2-items btn">Explore Now</button>
      </div>
    </div>
  );
};

export default Header;
