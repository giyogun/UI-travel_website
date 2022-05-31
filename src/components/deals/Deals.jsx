import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { images } from "../../constants";
import "./Deals.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Deals = () => {
  const data = [
    {
      id: 1,
      city: "Madrid",
      country: "Spain",
      rating: "4.8",
      old_price: 950,
      new_price: 850,
      pic: images.deals,
    },
    {
      id: 2,
      city: "Firenze",
      country: "Italy",
      rating: "4.5",
      old_price: 850,
      new_price: 750,
      pic: images.deals1,
    },
    {
      id: 3,
      city: "Paris",
      country: "France",
      rating: "4.4",
      old_price: 699,
      new_price: 599,
      pic: images.deals2,
    },
    {
      id: 4,
      city: "London",
      country: "UK",
      rating: "4.8",
      old_price: 950,
      new_price: 850,
      pic: images.deals3,
    },
  ];
  return (
    <div className="deals">
      <h1 className="page-heading">
        Exclusive <span>deals & discounts</span>
      </h1>
      <p className="subtext">
        Discover our fantastic early booking discounts & start planning your
        journey.
      </p>

      <ul>
        <div className="deals-box">
          {data.map((item) => (
            <div className="deals-boxes" key={item.id}>
              <img src={item.pic} alt="" className="box-pic" />
              <button className="book">Book Now</button>
              <div className="deals-row">
                <p>{item.city}</p>
                <div className="rating">
                  {" "}
                  <AiFillStar /> {item.rating}
                </div>
              </div>
              <div className="deals-row2">
                <div className="country">
                  <HiLocationMarker /> <span>{item.country}</span>
                </div>
                <div className="price">
                  <span className="slash">{`$${item.old_price}`}</span>
                  <span className="current">{`$${item.new_price}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ul>
      <div className="arrows">
        <div className="left-arrow">
          <BiLeftArrowAlt />
        </div>
        <div className="right-arrow">
          <BiRightArrowAlt />
        </div>
      </div>
    </div>
  );
};

export default Deals;
