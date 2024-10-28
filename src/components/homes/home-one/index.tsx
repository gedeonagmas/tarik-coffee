import HeaderOne from "@/layouts/headers/HeaderOne";
import Banner from "./Banner";
import About from "./About";
import ChooseArea from "./ChooseArea";
import Service from "./Service";
import Team from "./Team";
import WorkArea from "./WorkArea";
import Blog from "./Blog";
import CtaArea from "../../common/CtaArea";
import FooterOne from "@/layouts/footers/FooterOne";
import SkillArea from "./SkillArea";
import PricingPlan from "./PricingPlan";
import Project from "./Project";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <Banner />
      <About />
      <ChooseArea />
      <Service />
      <Team />
      {/* <WorkArea /> */}
      <Testimonial />
      <FAQ />
      <Project />
      {/* <PricingPlan /> */}
      {/* <SkillArea /> */}
      <Blog />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default HomeOne;
