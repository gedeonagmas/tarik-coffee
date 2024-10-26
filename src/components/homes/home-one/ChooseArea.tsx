import Image from "next/image";

import aboutShape_1 from "@/assets/img/about/2sm.webp";
import aboutShape_2 from "@/assets/img/about/2s.webp";
import aboutImg_1 from "@/assets/img/about/2.jpg";

const ChooseArea = () => {
  return (
    <div className="why-choose pd-top-100 pd-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 order-lg-last">
            <div className="about-mask-bg-wrap about-mask-bg-wrap-2 mb-4 mb-lg-0">
              <Image
                className="shape-image-sm top_image_bounce"
                src={aboutShape_1}
                alt="img"
              />
              <Image className="shape-image" src={aboutShape_2} alt="img" />
              <div className="thumb">
                <Image src={aboutImg_1} alt="img" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-lg-first align-self-center">
            <div className="section-title px-lg-5 mb-0">
              <h5 className="sub-title right-line">Why Choose Us</h5>
              <h2 className="title">
                We bring our vision to life, from start to end.
              </h2>
              <p className="content">
                Tarik Coffee delivers premium, ethically sourced beans with a
                commitment to quality and sustainability.
              </p>
              <div className="choose-wrap mt-4">
                <div className="media single-choose-inner">
                  <div className="media-left">
                    <div className="icon">
                      <i className="icomoon-gear"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4>Unlimited Quality</h4>
                    <p>
                      We carefully source premium coffee beans from trusted
                      farms, ensuring every batch meets our high standards{" "}
                    </p>
                  </div>
                </div>
                <div className="media single-choose-inner mb-3">
                  <div className="media-left">
                    <div className="icon">
                      <i className="icomoon-time"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4>Global Expertise</h4>
                    <p>
                      With a commitment to excellence, we deliver rich,
                      flavorful coffee to markets worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseArea;
