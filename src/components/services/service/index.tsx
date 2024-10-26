import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceArea from "./ServiceArea";
import WorkArea from "@/components/homes/home-one/WorkArea";
import Testimonial from "./Testimonial";
import PricingPlan from "@/components/homes/home-one/PricingPlan";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaArea from "@/components/common/CtaArea";

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Services" sub_title="Services" />
      <ServiceArea />
      {/* <WorkArea /> */}
      {/* <Testimonial /> */}
      {/* <PricingPlan /> */}
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default Service;
