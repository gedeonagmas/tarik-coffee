"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/components/pagination/Pagination";
import ChooseArea from "@/components/homes/home-one/ChooseArea";

interface item {
  id: number;
  serviceName: string;
  banner: string;
  description: string;
}

const Service = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 3;

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
      
      <ChooseArea type='service'/>

      <div
        style={{ marginTop: "80px" }}
        className="it-service-2__area grey-bg pt-120 pb-90"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentEvents?.map((item: item) => {
              return (
                <div
                  key={item.id}
                  // style={{ height: "380px" }}
                  className="rounded-md border hover:bg-gray-50 border-gray-100 p-4 shadow-md"
                >
                  <div className="icon-box">
                    <img
                      style={{ width: "100%", height: "150px" }}
                      className=""
                      src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                      alt="rk-theme"
                    />
                  </div>
                  <div className="detailsd mt-2">
                    <h3>
                      <Link href={`/service/${item?.id}`}>
                        {truncateText(item?.serviceName, 20)}
                      </Link>
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: truncateText(item?.description, 60),
                      }}
                    ></p>
                  </div>
                </div>
                //  <div
                //    className="col-xl-4 col-lg-4 col-md-6 mb-30 wow itfadeUp"
                //    data-wow-duration=".9s"
                //    data-wow-delay=".3s"
                //  >
                //    <div className="it-service-2__item p-relative fix single-service-inner style-hover-base text-center">
                //      <div className="it-service-2__thumb fix p-relative">
                //        <img
                //          className="w-100"
                //          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.banner}`}
                //          alt="rk-theme"
                //        />
                //      </div>
                //      <div className="it-service-2__wrapper fix">
                //        <div className="it-service-2__content-box text-center">
                //          <div className="it-service-2__top">
                //            <div className="it-service-2__icon">
                //              <span>
                //                <i className="flaticon-ux-design"></i>
                //              </span>
                //            </div>
                //            <Link href={`/service/${item?.id}`}>
                //              <h5 className="it-service-2__title-sm">
                //                {item?.serviceName}
                //              </h5>
                //            </Link>
                //          </div>
                //          <Link href={`/service/${item?.id}`}>Read More</Link>
                //        </div>
                //      </div>
                //    </div>
                //  </div>
              );
            })}
          </div>
          <div
            style={{ marginBottom: "30px", marginTop: "40px" }}
            className="d-flex justify-content-center"
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
