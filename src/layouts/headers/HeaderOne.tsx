"use client";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./menu/NavMenu";
import HeaderTopOne from "./menu/HeaderTopOne";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useState } from "react";
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
          <div
            className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`}
            id="Iitechie_main_menu"
            style={{ marginRight: "20px" }}
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <NavMenu />
            </ul>
          </div>
          <div className="nav-right-partd nav-right-part-desktop align-self-center">
            <Link
              style={{ height: "60px", width: "160px" }}
              className="it-btn btn-base"
              href="/contact"
            >
              Need Help?
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
