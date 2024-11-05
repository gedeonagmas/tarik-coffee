"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/TweenMax";
import { useRef } from "react";

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { parallaxX, parallaxY } = useParallax(containerRef, 20);

  return (
    <div
      className="banner-area relative banner-area-1 bg-banner bg-relative"
      ref={containerRef}
    >
      <motion.div
        animate={{ x: parallaxX * 2.5, y: parallaxY * 1 }}
        className="banner-bg-img"
        style={{ backgroundImage: `url(/assets/img/banner/33.jpg)` }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-white/30 to-transparent"></div>
      <div className="container">
        <div className="rowd justify-content-centerd">
          <div className="col-lg-6 col-md-9 order-lg-first align-self-center">
            <div className="banner-inner style-white  text-center text-lg-start">
              <h4 className="text-whited text-[#5B29E9]">
                Best Coffee Exporter
              </h4>
              <h2 className="title text-black">Excellence in Coffee Export</h2>
              <p className="content">
                From farm to cup, delivering the worlds finest beans, Where
                passion for quality meets global taste.
              </p>
              <div className="btn-wrap">
                <Link className="it-btn btn-base mr-space" href="/about">
                  Get Started
                </Link>
                <Link className="it-btn btn-border-white" href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
