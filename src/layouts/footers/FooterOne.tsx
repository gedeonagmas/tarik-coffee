"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SocialIcon from "@/components/common/SocialIcon";
import footer_data from "@/data/FooterData";
import Link from "next/link";

interface item {
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedInLink: string;
  telegramLink: string;
}

const FooterOne = () => {
  const [contact, setContact] = useState<item>();

  useEffect(() => {
    const fetchCategory = async () => {
      const response2 = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`
      );
      setContact(response2?.data);
    };
    fetchCategory();
  }, []);

  return (
    <footer
      className="footer-area bg-black bg-cover"
      style={{ backgroundImage: `url('/assets/img/bg/2.webp')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_about">
              <h4 className="widget-title">About company</h4>
              <div className="details">
                <p>
                  Address: <span>{contact?.address}</span>
                </p>
                <p>
                  Phone 1: <span>{contact?.phone1}</span>
                </p>
                <p>
                  Phone 2: <span>{contact?.phone2}</span>
                </p>
                <p>Email: {contact?.email}</p>
                <ul style={{ marginTop: "2px" }} className="social-mediad">
                  {/* <div className="it-footer__social"> */}
                  <a href={contact?.facebookLink}>
                    <i className="fab fa-facebook-f w-10 h-10"></i>
                  </a>{" "}
                  <a href={contact?.instagramLink}>
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                  <a href={contact?.linkedInLink}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>{" "}
                  <a href={contact?.twitterLink}>
                    <i className="fab fa-twitter"></i>
                  </a>{" "}
                  {/* </div> */}
                </ul>
              </div>
            </div>
          </div>

          {footer_data.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">{item.title}</h4>
                <ul>
                  {item.nav_links.map((menu, i) => (
                    <li key={i}>
                      <Link href={menu.link}>{menu.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="col-lg-3 text-white col-md-6">
            Our mission is to connect the world with premium coffee, while
            upholding ethical trade practices and supporting local communities.
            we are dedicated to sourcing and exporting the finest coffee beans.
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 font-normal align-self-center">
              <p>
                © 2024. All Rights Reserved.
                <span className="ml-3">
                  Powered by{" "}
                  <a
                    href="https://keradiondesigns.com"
                    className="text-gray font-bold"
                  >
                    Keradion Technologies.
                  </a>
                </span>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
