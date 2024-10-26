import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamDetailsArea from "./TeamDetailsArea"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Teamdetails = () => {
  return (
    <>
      <HeaderOne/>
      <Breadcrumb title="Team Details" sub_title="Team Details" />
      <TeamDetailsArea/>
      <CtaArea/>
      <FooterOne/>
    </>
  )
}

export default Teamdetails
