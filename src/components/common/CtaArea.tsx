import Link from "next/link";
import React from "react";

const CtaArea = () => {
  return (
    <div
      className="call-to-action-area backdrop-blur-xl filter relative text-center bg-overlay-based"
      style={{ backgroundImage: `url('/assets/img/bg/5.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-black/80 to-transparent"></div>
      <div className="container py-10 relative z-20"> 
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="single-call-to-action-inner style-white">
              <h5>We are here to answer your questions 24/7</h5>
              <h2>Need for coffee exporting services</h2>
              <Link className="it-btn btn-base mt-3" href="/contact">
                Contact With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
