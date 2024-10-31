"use client";
import testimonial_data from "@/data/ChooseUsData";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

const setting = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonial = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="testimonial-area bg-sky pd-top-115 pd-bottom-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center">
              <h5 className="sub-title double-line">Client Feedback</h5>
              <h2 className="title">Check what’s our client say </h2>
              <p className="content">
                Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc
                egestas augue atpellentesque laoreet
              </p>
            </div>
          </div>
        </div>

        <div className="testimonial-slider-2 slider-control-round bg-relative">
          <Slider
            {...setting}
            ref={sliderRef}
            className="style-active-bg owl-carousel"
          >
            {testimonial_data
              .filter((items: any) => items.page === "inner_page")
              .map((item: any) => (
                <div key={item.id} className="item">
                  <div className="single-testimonial-inner style-4">
                    <Image className="shaddow-img" src={item.img} alt="img" />
                    <div className="details">
                      <p>{item.desc}</p>
                      <h4>{item.name}</h4>
                      <span className="designation">{item.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>

          <div className="owl-nav">
            <button
              onClick={handlePrevClick}
              type="button"
              role="presentation"
              className="owl-prev"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              onClick={handleNextClick}
              type="button"
              role="presentation"
              className="owl-next"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
