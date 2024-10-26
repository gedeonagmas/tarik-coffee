"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface item {
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedinLink: string;
  telegramLink: string;
  gmapUrl: string;
}

const ContactArea = () => {
  const [contacts, setContacts] = useState<item>();

  useEffect(() => {
    const fetchCategory = async () => {
      const response2 = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/business-setup`
      );
      setContacts(response2?.data);
    };
    fetchCategory();
  }, []);

  return (
    <div className="team-area info-box-two pd-top-115 pd-bottom-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-title text-center">
              <h5 className="sub-title double-line">Contact</h5>
              <h2 className="title">Get in touch</h2>
              <p className="content">
                Get in touch with us to discover how Tarik Coffee can elevate
                your coffee experience!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-contact-inner text-center">
              <div className="icon-box">
                <i className="icomoon-pin"></i>
              </div>
              <div className="details-wrap">
                <div className="details-inner">
                  <h3>Office address</h3>
                  <a href={`tel:${contacts?.phone1}`}>{contacts?.address}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-contact-inner text-center">
              <div className="icon-box">
                <i className=" icomoon-email"></i>
              </div>
              <div className="details-wrap">
                <div className="details-inner">
                  <h3>Email Address</h3>
                  <a href={`mailto:${contacts?.email}`}>{contacts?.email}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-contact-inner text-center">
              <div className="icon-box">
                <i className=" icomoon-telephone"></i>
              </div>
              <div className="details-wrap">
                <div className="details-inner">
                  <h3>Phone Number</h3>
                  <a href={`tel:${contacts?.phone1}`}>{contacts?.phone1}</a>
                  <a
                    style={{ marginLeft: "20px" }}
                    href={`tel:${contacts?.phone2}`}
                  >
                    {contacts?.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
