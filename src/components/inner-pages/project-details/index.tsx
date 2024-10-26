import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ProjectDetailsArea from "./ProjectDetailsArea"
import CtaArea from "@/components/common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"

const ProjectDetails = () => {
   return (
      <>
         <HeaderOne />
         {/* <Breadcrumb title="Project Details" sub_title="Project Details" /> */}
         <ProjectDetailsArea />
         <CtaArea />
         <FooterOne />
      </>
   )
}

export default ProjectDetails
