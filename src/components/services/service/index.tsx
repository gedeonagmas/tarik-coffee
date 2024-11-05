import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceArea from "./ServiceArea";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaArea from "@/components/common/CtaArea";

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Services" sub_title="Services" />
      <ServiceArea />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default Service;
