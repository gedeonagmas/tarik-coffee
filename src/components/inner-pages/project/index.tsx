import Breadcrumb from "@/components/common/Breadcrumb";
import CtaArea from "@/components/common/CtaArea";
import FooterOne from "@/layouts/footers/FooterOne";
import ProjectArea from "./ProjectArea";
import HeaderOne from "@/layouts/headers/HeaderOne";

const Project = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Products" sub_title="Product" />
      <ProjectArea />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default Project;
