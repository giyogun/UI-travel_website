import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { images } from "../../constants";
import "./Testimonials.css";

const REVIEWS = [
  {
    id: 1,
    pic: images.client,
    author: "Mike taylor",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    company: "Lahore, Pakistan",
  },
  {
    id: 2,
    pic: "https://vz.cnwimg.com/wp-content/uploads/2009/11/Jason-Statham.jpg",
    author: "Chris Thomas",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    company: "CEO, Red Button",
  },
  {
    id: 3,
    pic: "https://www.hollywoodreporter.com/wp-content/uploads/2020/09/GettyImages-1198534947-H-2020-1601050500.jpg?w=681&h=383&crop=1",
    author: "Godwin Iyogun",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum fuga",
    company: "Flutterwave",
  },
];

const sorting = (num) => {
  if (num === REVIEWS.length - 1) {
    return 0;
  }
  return num + 1;
};

const Testimonials = () => {
  const [inView, setInView] = useState(0);
  const [background, setBackground] = useState(inView + 1);

  const navHandler = (x) => {
    if (x === "increase") {
      setInView((prev) => sorting(prev));
      setBackground((prev) => sorting(prev));
    }
  };

  console.log(REVIEWS[sorting(inView + 1)]);

  return (
    <div className="testimonials">
      <div className="testimonial-container">
        <img src={images.testimonial} alt="" className="vector-image" />
        <img src={images.testimonial} alt="" className="vector-image second" />
        <img src={images.testimonial} alt="" className="vector-image third" />
        <img src={images.rope} alt="" className="rope" />
        <img src={images.rope} alt="" className="rope rope-two" />
        <div className="page-text">
          <h1 className="page-heading">
            What people say <span>about us</span>
          </h1>
          <p className="subtext">
            Our Clients send us bunch of smilies for our services and we love
            them
          </p>
          <div className="testimonial-nav">
            <div className="left-arrow">
              <BiLeftArrowAlt />
            </div>
            <div className="right-arrow" onClick={() => navHandler("increase")}>
              <BiRightArrowAlt />
            </div>
          </div>
        </div>
        <div className="testimony">
          <img src={REVIEWS[inView].pic} alt="" />
          <div className="testimonial-card">
            <p className="customer-review">{REVIEWS[inView].text}</p>
            <h5>{REVIEWS[inView].author}</h5>
            <span>{REVIEWS[inView].company}</span>
          </div>
          <div className="testimonial-card card2">
            <p className="customer-review">{REVIEWS[background].text}</p>
            <h5>{REVIEWS[background].author}</h5>
            <span>{REVIEWS[background].company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
