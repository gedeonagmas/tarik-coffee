"use client";
import SocialIcon from "@/components/common/SocialIcon";
import team_data from "@/data/TeamData";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface item {
  id: number;
  full_name: string;
  image: string;
  title: string;
  position: string;
}

const Team = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/teams-list`
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
    <div className="team-area pd-top-115 pd-bottom-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h5 className="sub-title double-line">Expert Team</h5>
              <h2 className="title">Meet with our expert</h2>
              <p className="content">
                Meet our dedicated team of coffee enthusiasts committed to
                delivering excellence at every stage of the coffee journey.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {currentEvents?.map((item: item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="single-team-inner style-1 text-center">
                <div className="thumb">
                  <img
                    style={{ width: "100%", height: "200px" }}
                    className=""
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.image}`}
                    alt="rk-themed"
                  />
                  <ul className="social-media">{/* <SocialIcon /> */}</ul>
                </div>
                <div className="details-wrap">
                  <div className="details-inner">
                    <h4>
                      <Link href="/team-details">
                        {item.title} {item?.full_name}
                      </Link>
                    </h4>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
