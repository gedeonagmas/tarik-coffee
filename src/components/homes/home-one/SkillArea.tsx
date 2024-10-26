import Image from "next/image";
import Skillbar from "@/components/common/Skillbar";

import skillbarImg_1 from "@/assets/img/bg/4.webp";
import skillbarImg_2 from "@/assets/img/other/1.webp";
import skillbarImg_3 from "@/assets/img/other/2.webp";
import skillbarImg_4 from "@/assets/img/other/3.webp";

const SkillArea = () => {
   return (
      <div className="skill-area bg-relative bg-sky pd-top-120 pd-bottom-120">
         <Image className="half-bg-right" src={skillbarImg_1} alt="img" />
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pe-5 mb-5 mb-lg-0">
                  <div className="section-title mb-0">
                     <h5 className="sub-title right-line">Professional Skill </h5>
                     <h2 className="title">We have professional skilled </h2>
                     <p className="content">Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque</p>
                  </div>

                  <div className="skill-progress-area mt-4">
                     <Skillbar/>
                  </div>
               </div>

               <div className="col-lg-6 px-lg-5">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="thumb border-radius-5 mb-4 mb-md-0 image-hover-animate">
                           <Image src={skillbarImg_2} alt="img" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="thumb border-radius-5 mb-4 image-hover-animate">
                           <Image src={skillbarImg_3} alt="img" />
                        </div>
                        <div className="thumb border-radius-5 image-hover-animate">
                           <Image src={skillbarImg_4} alt="img" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SkillArea
