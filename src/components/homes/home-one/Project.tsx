"use client";
import { useRef } from "react";
import Slider from "react-slick";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface item {
  id: number;
  title: string;
  banner: string;
  description: string;
}

const setting = {
  infinite: true,
  speed: 1500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
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

const Project = () => {
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

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products-list`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchEvents();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentEvents = events.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="project-area bg-banner pd-top-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title style-white text-center">
              <h5 className="sub-title text-white double-line">Products</h5>
              <h2 className="title">Our latest Coffee Products</h2>
              <p className="content">
                Explore our diverse range of premium coffee products, crafted to
                deliver exceptional flavor and quality in every cup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-slider-2 slider-control-square px-32 owl-carousel">
        <Slider {...setting} ref={sliderRef}>
          {currentEvents.map((item: item) => (
            <div key={item.id} className="item">
              <div className="single-project-inner style-two">
                <div className="thumb">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                    alt="rk-theme"
                    className="h-52 w-full"
                    loading="lazy"
                  />
                </div>
                <div className="details-wrap">
                  <h3>
                    <Link href={`/product/${item.id}`}>{item?.title}</Link>
                  </h3>
                  <Link href={`/product/${item.id}`}>
                    Discover More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="owl-nav disabled">
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
  );
};

export default Project;
