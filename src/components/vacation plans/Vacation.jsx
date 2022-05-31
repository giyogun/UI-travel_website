import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BiArrowBack,
  BiArrowToRight,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from "react-icons/bi";
import { images } from "../../constants";
import "./Vacation.css";

const DESTINATIONS = [
  {
    id: 1,
    city: "Rome",
    country: "Italy",
    rating: "4.8",
    price: "5,42k",
    duration: 10,
    pic: "https://media.cntraveler.com/photos/5a903dd660543c4ae96c2e74/16:9/w_2560%2Cc_limit/GettyImages-497268617.jpg",
  },
  {
    id: 2,
    city: "London",
    country: "UK",
    rating: "4.7",
    price: "2,42k",
    duration: 7,
    pic: "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/towerbridge-640x360.jpg?mw=640&hash=9FF3EBA9414733318A48ABDB4F58FBEB3B7E29AC",
  },
  {
    id: 3,
    city: "Osaka",
    country: "Japan",
    rating: "4.4",
    price: "5,42k",
    duration: 10,
    pic: "https://content.r9cdn.net/rimg/dimg/45/5f/5788029f-city-25901-16737226b47.jpg?width=1366&height=768&xhint=1747&yhint=789&crop=true",
  },
];

const Vacation = () => {
  return (
    <div className="vacation">
      <h1 className="page-heading">
        Best <span>vacation plan</span>
      </h1>
      <p className="subtext">
        Plan your perfect vacation with our travel agency. Choose among hundreds
        of all-inclusive offers!{" "}
      </p>

      <div className="nav-arrows">
        <div className="left-arrow">
          <BiLeftArrowAlt />
        </div>
        <div className="right-arrow">
          <BiRightArrowAlt />
        </div>
      </div>
      <img src={images.palm} alt="" className="palm-tree" />
      <img src={images.palm} alt="" className="palm-tree v2" />
      <ul>
        <div className="vac-box">
          {DESTINATIONS.map((item) => (
            <div className="vac-boxes">
              <img src={item.pic} alt="" className="vac-pic" />
              <div className="vac-row">
                <p>{`${item.city}, ${item.country}`}</p>
                <span>{`$${item.price}`}</span>
              </div>
              <div className="vac-row2">
                <div className="duration">
                  <img src={images.pin} alt="" />{" "}
                  <span>{item.duration} days trip</span>
                </div>
                <div className="ratings">
                  <AiFillStar /> {item.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Vacation;
