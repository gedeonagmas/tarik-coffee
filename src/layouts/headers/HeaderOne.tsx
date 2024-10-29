"use client";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./menu/NavMenu";
import HeaderTopOne from "./menu/HeaderTopOne";
import UseSticky from "@/hooks/UseSticky";
import HeaderSearchbar from "./menu/HeaderSearchbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo_1 from "@/assets/img/logo.jpg";

interface item {
  phone1: string;
  email: string;
  address: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedinLink: string;
}

const HeaderOne = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { sticky } = UseSticky();
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsActive(!isActive); // Toggle the isActive state
  };

  return (
    <>
      <HeaderTopOne />
      <nav
        className={`navbar navbar-area navbar-expand-lg navbar-area-1 ${
          sticky ? "sticky-active" : ""
        }`}
      >
        <div
          style={{ height: "60px" }}
          className="container nav-container navbar-bg"
        >
          <div className="responsive-mobile-menu">
            <button
              onClick={toggleMobileMenu}
              className={`menu toggle-btn d-block d-lg-none ${
                isActive ? "open" : ""
              }`}
              data-target="#Iitechie_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left"></span>
              <span className="icon-right"></span>
            </button>
          </div>
          <div className="logo">
            <Link href="/">
              <Image
                style={{ height: "55px", width: "60px" }}
                src={logo_1}
                alt="img"
              />
            </Link>
          </div>
          {/* <div className="nav-right-part nav-right-part-mobile">
            <a
              onClick={() => setIsSearch(true)}
              style={{ cursor: "pointer" }}
              className="search-bar-btn"
            >
              <i className="fa fa-search"></i>
            </a>
          </div> */}
          <div
            className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`}
            id="Iitechie_main_menu"
            style={{ marginRight: "20px" }}
          >
            <ul
              // style={{ marginLeft: "10px" }}
              className="navbar-nav menu-open text-lg-end"
            >
              <NavMenu />
            </ul>
          </div>
          <div className="nav-right-partd nav-right-part-desktop align-self-center">
            {/* <a
              onClick={() => setIsSearch(true)}
              style={{ cursor: "pointer" }}
              className="search-bar-btn"
            >
              <i className="fa fa-search"></i>
            </a> */}
            {/* <Link
              style={{ height: "60px", width: "160px" }}
              className="it-btn btn-base"
              href="#"
            >
              Get Started
            </Link> */}
          </div>
        </div>
      </nav>

      {/* <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} /> */}
    </>
  );
};

export default HeaderOne;
