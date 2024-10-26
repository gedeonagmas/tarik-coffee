"use client";
import inner_blog_data from "@/data/InnerBlogData";
import VideoPopup from "@/modals/VideoPopup";
import Link from "next/link";
import { useRef } from "react";
import ReactPaginate from "react-paginate";
import Slider from "react-slick";
import BlogSidebar from "./BlogSidebar";
import React, { useEffect, useState } from "react";
import Pagination from "./../../pagination/Pagination";
import axios from "axios";
import Image from "next/image";

interface item {
  id: number;
  eventName: string;
  banner: string;
  description: string;
  created_at: string;
}

const setting = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  dots: false,
  arrows: false,
  // autoplay: false,
  // autoplaySpeed: 1500,
};

const BlogArea = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6;

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

  // Logic for handling page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const truncateText = (text: string, length: number) => {
    if (typeof text !== "string") {
      return "";
    }
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <>
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-4 col-lg-4 col-md-6"> */}
            {currentEvents.map((item: item) => (
              <div
                key={item.id}
                className="single-blog-inner col-xl-4 col-lg-4 col-md-6 mb-30"
              >
                {item?.banner && (
                  <div
                    style={{ position: "relative", height: "250px" }}
                    className="thumb"
                  >
                    <Link href={`/blog/${item.id}`}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                        alt={item.eventName || "event Image"}
                        fill
                        style={{ objectFit: "cover" }}
                        objectFit="cover" // Ensures consistent aspect ratio
                      />
                    </Link>
                  </div>
                )}

                <div className="details">
                  <h2>
                    <Link href={`/blog/${item.id}`}>
                      {item?.eventName}
                    </Link>
                  </h2>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user"></i> By Admin
                    </li>
                    <li>
                      <i className="far fa-calendar-alt me-2"></i>
                      {item?.created_at}
                    </li>
                  </ul>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncateText(item?.description, 100),
                    }}
                  ></p>
                  <Link href={`/blog/${item?.id}`} className="read-more-text">
                    Read More <i className="fa fa-caret-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogArea;
