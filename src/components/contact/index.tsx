import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ContactArea from "./ContactArea";
import ContactMap from "./ContactMap";
import CtaArea from "../common/CtaArea";
import FooterOne from "@/layouts/footers/FooterOne";

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact" sub_title="Contact" />
      <ContactArea />
      <ContactMap />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default Contact;
