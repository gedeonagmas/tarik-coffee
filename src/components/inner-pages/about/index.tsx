import Breadcrumb from "@/components/common/Breadcrumb";
import HomeOneAbout from "@/components/homes/home-one/About";
import ChooseArea from "@/components/homes/home-one/ChooseArea";
import FAQ from "@/components/homes/home-one/FAQ";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaArea from "@/components/common/CtaArea";
import FooterOne from "@/layouts/footers/FooterOne";

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" sub_title="About Us" />
      <HomeOneAbout />
      <ChooseArea type="home" />
      <FAQ />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default About;
