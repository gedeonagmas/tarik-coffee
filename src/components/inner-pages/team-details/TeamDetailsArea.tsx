import Skillbar from "@/components/common/Skillbar"
import SocialIcon from "@/components/common/SocialIcon"
import Image from "next/image"

import teamDetailsThumb from "@/assets/img/team/single-team.webp"

const TeamDetailsArea = () => {
   return (
      <div className="team-details-page pd-top-120 mb-4">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="thumb image-hover-animate me-lg-5">
                     <Image src={teamDetailsThumb} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6 col-12 align-self-center">
                  <div className="team-details-info">
                     <h3>Karshin Kumar</h3>
                     <p className="designation">Founder</p>
                     <p className="content">Mauris turpis nunc, blandit et volutpat molestie porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio fauciberisque quis, convallis in nisi. Suspendisse non nisl sit amet velit hendrerit tm. Ut leo.  a nisl id ante tempus hendrerit.</p>
                     <ul className="details-info">
                        <li><strong>Phone : </strong> 123 - 456 - 789</li>
                        <li><strong>Email : </strong> solverwp@gmail.com</li>
                        <li><strong>Website : </strong> solverwp.com</li>
                        <li><strong>Experiences : </strong> 08 Years</li>
                     </ul>
                     <ul className="social-media">
                        <SocialIcon />
                     </ul>
                  </div>
               </div>
            </div>
            <div className="row mt-5 pd-bottom-90">
               <div className="col-lg-6">
                  <div className="single-skill-inner bg-sky mb-4 mb-lg-0">
                     <h3>My Experiences</h3>
                     <div className="skill-list">
                        <h6>Softten (2015 - 2018)</h6>
                        <span>IT Expert</span>
                        <p>Tincidunt eget semper nec quam. Sed hendrerit. Morbi ac felis. Nuncn egestas augue at pellentesque laoreet felis eros vehicula lealesuaelitk leo quis pede. Donec interdum.</p>
                     </div>
                     <div className="skill-list mb-0">
                        <h6>Softten (2015 - 2018)</h6>
                        <span>IT Expert</span>
                        <p>Tincidunt eget semper nec quam. Sed hendrerit. Morbi ac felis. Nuncn egestas augue at pellentesque laoreet felis eros vehicula lealesuaelitk leo quis pede. Donec interdum.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="single-skill-inner bg-sky">
                     <h3>My Professional</h3>
                     <div className="skill-progress-area mt-4">
                        <Skillbar />
                        <Skillbar />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TeamDetailsArea
