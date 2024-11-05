"use client";
import Slider from "react-slick";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import testiBigImg from "@/assets/img/testimonial/02.webp";

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
    <div className="w-full relative bg-red-600d">
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
          <div key={item.id} className="sm:px-1 lg:px-[110px] w-full">
            <div className="flex flex-col lg:flex-row w-full items-center gap-5 justify-between">
              <div className="thumb w-full mb-4 mb-md-0">
                <img src="/assets/img/testimonial/11.jpg" alt="" className="" />
                <div className="">
                  <div className="quote-wrap">
                    <Image src={testiBigImg} alt="img" />
                  </div>
                </div>
              </div>
              <div className="flex w-full bg-pink-500d flex-col gap-4 px-4 py-7 items-center justify-between">
                <div className="d-flex mt-2 bg-yellow-400d w-full justify-content-center">
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
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
