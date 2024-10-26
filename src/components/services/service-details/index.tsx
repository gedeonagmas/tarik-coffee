import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from "./ServiceDetailsArea"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"

const ServiceDetails = () => {
   return (
      <>
         <HeaderOne />
         {/* <Breadcrumb title="Service Details" sub_title="Service Details" /> */}
         <ServiceDetailsArea />
         <CtaArea/>
         <FooterOne/>
      </>
   )
}

export default ServiceDetails
