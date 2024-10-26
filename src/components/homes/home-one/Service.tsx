"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface item {
  id: number;
  serviceName: string;
  banner: string;
  description: string;
}

const Service = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/service`
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
  const truncateText = (text: string, length: number) => {
    if (typeof text !== "string") {
      return "";
    }
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div
      className="service-area bg-overlay pd-top-120 pd-bottom-90"
      style={{ backgroundImage: `url('/assets/img/bg/3.jpg')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title border-radius-5 p-35 bg-base style-white mb-lg-0">
              <h2 className="title mt-4">We Provide Best Coffee Solutions</h2>
              <p className="content">
                At Tarik Coffee, we are dedicated to sourcing and exporting the
                finest coffee beans from sustainable farms to coffee lovers
                around the globe.
              </p>
              <p className="content">
                With a passion for quality and a commitment to excellence, we
                work closely with farmers to ensure that every bean reflects the
                rich flavors and heritage of its origin.
              </p>
              <p className="content">
                Our mission is to connect the world with premium coffee, while
                upholding ethical trade practices and supporting local
                communities. From our hands to yours, we deliver a brew that’s
                crafted with care and precision.
              </p>
              <div style={{ marginTop: "65px" }} className="btn-wrap pt-1 mb-4">
                <Link
                  className="it-btn btn-small btn-border-white mt-2 me-2"
                  href="/contact"
                >
                  Contact Us
                </Link>
                <Link
                  className="it-btn btn-small btn-black mt-2"
                  href="/service"
                >
                  All Service
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              {currentEvents?.map((item: item) => (
                <div key={item.id} className="col-md-6">
                  <div
                    style={{ height: "380px" }}
                    className="single-service-inner style-white text-center"
                  >
                    <div className="icon-box">
                      <img
                        style={{ width: "100%", height: "200px" }}
                        className=""
                        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                        alt="rk-theme"
                      />
                    </div>
                    <div className="details">
                      <h3>
                        <Link href={`/service/${item?.id}`}>
                          {truncateText(item?.serviceName, 18)}
                        </Link>
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: truncateText(item?.description, 60),
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
