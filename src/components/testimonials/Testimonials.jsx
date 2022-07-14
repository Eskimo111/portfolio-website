import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Show",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi saepe laudantium exercitationem distinctio sunt voluptate numquam, perferendis perspiciatis rem eveniet repellendus at fugiat fuga tenetur! Veritatis modi rem enim.",
  },
  {
    avatar: AVTR2,
    name: "Shatte Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi saepe laudantium exercitationem distinctio sunt voluptate numquam, perferendis perspiciatis rem eveniet repellendus at fugiat fuga tenetur! Veritatis modi rem enim.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi saepe laudantium exercitationem distinctio sunt voluptate numquam, perferendis perspiciatis rem eveniet repellendus at fugiat fuga tenetur! Veritatis modi rem enim.",
  },
  {
    avatar: AVTR4,
    name: "Ellie Khan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi saepe laudantium exercitationem distinctio sunt voluptate numquam, perferendis perspiciatis rem eveniet repellendus at fugiat fuga tenetur! Veritatis modi rem enim.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((testimonial, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h5>{testimonial.name} </h5>
              <small className="client__review">{testimonial.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
