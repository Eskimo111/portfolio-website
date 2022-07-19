import React from "react";
import "./testimonials.css";
import Fade from "react-reveal/Fade";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import { Component } from "react";

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

class Testimonials extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Fade left duration={500}>
          <Swiper
            className="container testimonial__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {this.props.comments.map((testimonial, index) => {
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
        </Fade>
      </section>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Testimonials));
