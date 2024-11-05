"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
                {contact?.address && (
                  <p>
                    Address: <span>{contact?.address}</span>
                  </p>
                )}
                {contact?.phone1 && (
                  <p>
                    Phone 1: <span>{contact?.phone1}</span>
                  </p>
                )}
                {contact?.phone2 && (
                  <p>
                    Phone 2: <span>{contact?.phone2}</span>
                  </p>
                )}
                {contact?.email && <p>Email: {contact?.email}</p>}
                <div className="flex items-center gap-4 mt-2">
                  {contact?.facebookLink && (
                    <a href={contact?.facebookLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        className="bg-white rounded-full p-1 w-9 h-9"
                      >
                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                      </svg>
                    </a>
                  )}
                  {contact?.instagramLink && (
                    <a href={contact?.instagramLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        className="bg-white rounded-full p-1.5 w-9 h-9"
                      >
                        <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                      </svg>
                    </a>
                  )}
                  {contact?.telegramLink && (
                    <a href={contact?.twitterLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="bg-white rounded-full p-1.5 w-9 h-9"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                      </svg>
                    </a>
                  )}
                  {contact?.linkedInLink && (
                    <a href={contact?.linkedInLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        className="bg-white rounded-full p-1.5 w-9 h-9"
                      >
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                      </svg>
                    </a>
                  )}
                </div>
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
                      <Link href={menu.link} className="hover:text-gray-300">
                        {menu.title}
                      </Link>
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
                    className="text-gray hover:text-gray-300 font-bold"
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
