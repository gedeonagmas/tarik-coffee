import React from "react";
import Link from "next/link";
// import "./sty.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-wrapper mt_20 centred">
      <div className="pagination">
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link
            href="#"
            className="prev"
            onClick={() => onPageChange(currentPage - 1)}
          >
            prev
          </Link>
        )}

        {/* Page Numbers */}
        {getPageNumbers().map((number, i) => (
          <ul
            key={i}
            style={{ listStyleType: "none", padding: "0px", margin: "0px" }}
          >
            <li>
              <Link
                href="#"
                className={`page-number ${
                  number === currentPage ? "current" : ""
                }`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </Link>
            </li>
          </ul>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link
            href="#"
            className="next text-red"
            onClick={() => onPageChange(currentPage + 1)}
          >
            next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
