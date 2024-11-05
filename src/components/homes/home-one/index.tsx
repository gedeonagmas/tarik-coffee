import HeaderOne from "@/layouts/headers/HeaderOne";
import Banner from "./Banner";
import About from "./About";
import ChooseArea from "./ChooseArea";
import Service from "./Service";
import Team from "./Team";
import Blog from "./Blog";
import CtaArea from "../../common/CtaArea";
import FooterOne from "@/layouts/footers/FooterOne";
import Project from "./Project";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <Banner />
      <About />
      <ChooseArea type="home" />
      <Service />
      <Team />
      <Testimonial />
      <FAQ />
      <Project />
      <Blog />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default HomeOne;
