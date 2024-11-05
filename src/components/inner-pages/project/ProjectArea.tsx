"use client";
import ChooseArea from "@/components/homes/home-one/ChooseArea";
import Pagination from "@/components/pagination/Pagination";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface item {
  id: number;
  title: string;
  banner: string;
  description: string;
}

const Project = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products-list`
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
      <ChooseArea type="product" />
      <div
        style={{ marginTop: "80px" }}
        className="it-project-3__area pt-120 pb-90"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {currentEvents?.map((item: item, i: number) => {
              return (
                <div
                  key={i}
                  className="border shadow-sm"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="single-project-inner style-two">
                    <div
                      style={{ position: "relative", height: "300px" }}
                      className="thumb"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                        alt={item.title || "product Image"}
                        fill
                        style={{ objectFit: "cover" }}
                        objectFit="cover" // Ensures consistent aspect ratio
                      />
                    </div>
                    <div className="details-wrap">
                      <h3>
                        <Link href={`/product/${item?.id}`}>{item.title}</Link>
                      </h3>
                      <Link href={`/product/${item?.id}`}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: truncateText(item?.description, 60),
                          }}
                        ></p>{" "}
                      </Link>
                      <Link
                        href={`/product/${item?.id}`}
                        className="read-more-text"
                      >
                        Read More <i className="fa fa-caret-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{ marginBottom: "30px", marginTop: "40px" }}
            className="d-flex justify-content-center"
          >
            {currentEvents?.length > 6 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
