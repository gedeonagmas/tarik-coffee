import Skillbar from "@/components/common/Skillbar"
import Image from "next/image"

import skillThumb_1 from "@/assets/img/about/1sm.webp";
import skillThumb_2 from "@/assets/img/about/1s.webp";
import skillThumb_3 from "@/assets/img/about/6.webp";

const SkillArea = ({ style }: any) => {
   return (
      <div className={`skill-area bg-relative ${style ? "pd-top-115 pd-bottom-100" : "pd-top-100"}`}>
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pe-5 mb-5 mb-lg-0">
                  <div className="section-title mb-0">
                     <h5 className="sub-title left-border">Professional Skill </h5>
                     <h2 className="title">Bringing new it business solutions and ideas </h2>
                     <p className="content">Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque</p>
                  </div>
                  <div className="skill-progress-area mt-4">
                     <Skillbar />
                  </div>
               </div>

               <div className="col-lg-6 px-lg-5">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-1 mb-4 mb-lg-0">
                     <Image className="shape-image-sm top_image_bounce" src={skillThumb_1} alt="img" />
                     <Image className="shape-image" src={skillThumb_2} alt="img" />
                     <div className="thumb">
                        <Image src={skillThumb_3} alt="img" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SkillArea
