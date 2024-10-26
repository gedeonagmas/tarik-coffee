import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TeamArea from "./TeamArea";
import SkillArea from "../about/SkillArea";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaArea from "@/components/common/CtaArea";

const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Team" sub_title="Team" />
      <TeamArea />
      {/* <Counter /> */}
      {/* <SkillArea style={true} /> */}
      {/* <Brand/> */}
      <CtaArea />
      <FooterOne />
    </>
  );
};

export default Team;
