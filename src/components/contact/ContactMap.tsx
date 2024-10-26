"use client";
import ContactForm from "../forms/ContactForm";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface item {
  gmapUrl: string;
}

const ContactMap = () => {
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
    <>
      <div className="g-map-inner">
        <iframe
          src={contacts?.gmapUrl}
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
      </div>
      <div className="g-map-contact">
        <div className="row justify-content-end">
          <div className="col-lg-5 col-md-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
