"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface item {
  id: number;
  eventName: string;
  banner: string;
  description: string;
  created_at: string;
}

const Blog = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/event_list`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  console.log(events, "events");
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentEvents = events.slice(indexOfFirstProduct, indexOfLastProduct);

  // Total number of pages
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const truncateText = (text: string, length: number) => {
    if (typeof text !== "string") {
      return "";
    }
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div className="blog-area pd-top-115 pd-bottom-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="section-title text-center">
              <h5 className="sub-title double-line">blog Post</h5>
              <h2 className="title">Read Our Latest Tips &Tricks</h2>
              <p className="content">
                Dive into our blog for insights, tips, and stories about coffee
                culture, sourcing, and brewing the perfect cup.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {currentEvents?.map((item: item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="single-blog-inner style-3">
                <div
                  style={{ position: "relative", height: "250px" }}
                  className="thumb"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                    alt={item?.eventName || "event Image"}
                    fill
                    style={{ objectFit: "cover" }}
                    objectFit="cover" // Ensures consistent aspect ratio
                  />
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt me-2"></i>
                      {item?.created_at}
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h4>
                    <Link href={`/blog/${item.id}`}>{item?.eventName}</Link>
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncateText(item?.description, 100),
                    }}
                  ></p>
                  <Link className="read-more-btn" href={`/blog/${item.id}`}>
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
