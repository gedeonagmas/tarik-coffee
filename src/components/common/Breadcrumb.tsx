"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/TweenMax";
import { useRef } from "react";

const Breadcrumb = ({ title, sub_title }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { parallaxX, parallaxY } = useParallax(containerRef, 20);

  console.log(sub_title, "sssssssssssss");
  return (
    <div className="breadcrumb-area bg-banner bg-relative" ref={containerRef}>
      <motion.div
        animate={{ x: parallaxX * 2.5, y: parallaxY * 1 }}
        className="banner-bg-img"
        style={{ backgroundImage: `url(/assets/img/bg/1.webp)` }}
      ></motion.div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="breadcrumb-inner text-center">
              <h2 className="page-title">{title}</h2>
              <ul className="page-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{sub_title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
