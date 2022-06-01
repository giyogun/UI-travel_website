import React, { useState } from "react";
import "./Blog.css";

const BLOGS = [
  {
    id: 1,
    title: "What to learn from Traveling",
    date: "January 12, 2022",
    image:
      "https://static.boredpanda.com/blog/wp-content/uploads/2014/04/amazing-places-to-see-before-you-die-coverimage.jpg",
  },
  {
    id: 2,
    title: "Travel far enough, you meet yourself",
    date: "March 2, 2022",
    image:
      "https://www.swedishnomad.com/wp-content/images/2017/02/Places-to-visit-in-Japan.jpg",
  },
  {
    id: 3,
    title: "How to Save Money While Visiting Africa",
    date: "May 4, 2022",
    image: "https://www.timeforkids.com/wp-content/uploads/2019/07/Iceland.jpg",
  },
  {
    id: 4,
    title: "Reflections on 5 Months of Travel: Time to Hang",
    date: "April 1, 2022",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB19vkTs.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f",
  },
];

const Blog = () => {
  const [active, setActive] = useState(2);
  return (
    <div className="blog">
      <h1 className="page-heading">
        Get updates with <span>latest blog</span>
      </h1>

      {/* <ul> */}
      <div className="blog-container">
        {BLOGS.map((blog) => (
          <div className="blogs" key={blog.id}>
            <img src={blog.image} alt="" />
            <h5>{blog.title}</h5>
            <span>{blog.date}</span>
          </div>
        ))}
      </div>
      {/* </ul> */}

      <div className="blog-nav">
        {[1, 2, 3].map((item) => (
          <div
            className={`nav-dot ${active === item ? "active" : ""} `}
            key={item}
            onClick={() => setActive(item)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
