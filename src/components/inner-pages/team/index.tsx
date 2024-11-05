import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TeamArea from "./TeamArea";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaArea from "@/components/common/CtaArea";

const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Team" sub_title="Team" />
      <TeamArea />
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default Team;
