"use client";
import Image, { StaticImageData } from "next/image";
import work_data from "@/data/WorkData";
import Slider from "react-slick";

import brandImg_1 from "@/assets/img/client/1.webp";
import brandImg_2 from "@/assets/img/client/2.webp";
import brandImg_3 from "@/assets/img/client/3.webp";
import brandImg_4 from "@/assets/img/client/4.webp";

const brand_data: StaticImageData[] = [
  brandImg_1,
  brandImg_2,
  brandImg_3,
  brandImg_4,
  brandImg_2,
];

const setting = {
  loop: true,
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const WorkArea = () => {
  return (
    <div className="how-it-work-area bg-blue pd-top-110 pd-top-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title style-white text-center">
              <h5 className="sub-title double-line">Work Process</h5>
              <h2 className="title">From source to global export</h2>
              <p className="content">
                our streamlined process ensures the finest coffee reaches your
                cup
              </p>
            </div>
          </div>
        </div>
        <div className="row pd-bottom-100">
          {work_data
            .filter((items) => items.page === "home_1")
            .map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div className="single-work-inner style-two text-center">
                  <div className="count-wrap">
                    <div className="count-inner">
                      <h2>{item.count}</h2>
                    </div>
                  </div>
                  <div className="details-wrap">
                    <div className="details-inner">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* <Slider {...setting} className="client-slider pd-top-90 pd-bottom-110 owl-carousel">
               {brand_data.map((brand, i) => (
                  <div key={i} className="item">
                     <div className="thumb text-center">
                        <Image src={brand} alt="img" />
                     </div>
                  </div>
               ))}
            </Slider> */}
      </div>
    </div>
  );
};

export default WorkArea;
