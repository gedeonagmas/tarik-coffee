"use client";
import Slider from "react-slick";
import testimonial_data from "@/data/TestimonialData";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import testiThumb_1 from "@/assets/img/testimonial/1.webp";
import testiThumb_2 from "@/assets/img/testimonial/2.webp";
import testiBigImg from "@/assets/img/testimonial/02.webp";

const testi_small_img: StaticImageData[] = [
  testiThumb_1,
  testiThumb_2,
  testiThumb_1,
  testiThumb_2,
];
interface item {
  name: string;
  description: string;
  banner: string;
}
const Testimonial = () => {
  const slider1Ref = useRef<Slider | null>(null);
  const slider2Ref = useRef<Slider | null>(null);

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      slider1Ref.current.slickGoTo(2);
    }
  }, []);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial-list`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching testimonial:", error);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <div className="testimonial-slider bg-sky bg-relative">
      <div className="bg-relative">
        <Slider
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplay={true}
          fade={true}
          autoplaySpeed={5000}
          asNavFor={slider2Ref.current as Slider | undefined}
          ref={(slider) => (slider1Ref.current = slider)}
          className="slider testimonial-thumb testimonial-thumb-2"
        >
          {currentProducts?.map((item: any) => (
            <div key={item.id} className="item">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div
                    className="thumb mb-4 mb-md-0"
                    style={{
                      backgroundImage: `url(/assets/img/testimonial/11.jpg)`,
                    }}
                  >
                    <div className="quote-wrap">
                      <div className="quote">
                        <Image src={testiBigImg} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6 align-self-center">
                  <div className="single-testimonial-inner text-md-center px-lg-5 px-md-4">
                    <div className="details">
                      <div className="d-flex justify-content-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                          alt="rk-theme"
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <h2>{item.name}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <Slider
          slidesToShow={3}
          slidesToScroll={1}
          asNavFor={slider1Ref.current as Slider | undefined}
          ref={(slider) => (slider2Ref.current = slider)}
          dots={false}
          autoplay={true}
          variableWidth={true}
          autoplaySpeed={5000}
          centerMode={true}
          centerPadding="0"
          focusOnSelect={true}
          arrows={false}
          className="slider testimonial-nav-slider testimonial-nav-slider-2"
        >
          {currentProducts.map((img: any, i) => (
            <div key={i} className="item">
              <div className="thumb">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${img.banner}`}
                  alt="rk-theme"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};

export default Testimonial;
