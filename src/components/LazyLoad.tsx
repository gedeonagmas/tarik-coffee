"use client";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoad(prop: any) {
  return (
    <>
      <LazyLoadImage
        alt={prop?.alt}
        className={prop?.className}
        effect="blur"
        src={prop?.src}
        style={prop?.style}
      />
    </>
  );
}
