import React from "react";
import "./testimonials.scss";
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((item) => {
          return (
            <div
              className={item.featured ? "card featured" : "card"}
              key={item.id}
            >
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img src={item.img} alt="" className="user" />
                <img src={item.icon} alt="" className="right" />
              </div>
              <div className="center">{item.desc}</div>
              <div className="bottom">
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
