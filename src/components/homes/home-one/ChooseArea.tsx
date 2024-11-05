import Image from "next/image";
import homeImage from "@/assets/img/about/2.jpg";
import serviceImage from "@/assets/img/about/service.jpg";
import productImage from "@/assets/img/about/product.jpg";
import teamImage from "@/assets/img/about/team.jpg";
import blogImage from "@/assets/img/about/blog.jpg";
import chooseData from "@/data/ChooseUsData";

const ChooseArea = (prop: any) => {
  const data = chooseData?.filter((e) => e?.type === prop?.type)[0];

  return (
    <div className="why-choose pd-top-100 pd-bottom-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 order-lg-last">
            <div className="about-mask-bg-wrap about-mask-bg-wrap-2 mb-4 mb-lg-0">
              
              <div className="thumbd p-2">
                <Image
                  src={
                    prop?.type === "home"
                      ? homeImage
                      : prop?.type === "service"
                      ? serviceImage
                      : prop?.type === "product"
                      ? productImage
                      : prop?.type === "team"
                      ? teamImage
                      : blogImage
                  }
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-lg-first align-self-center">
            <div className="section-title px-lg-5 mb-0">
              <h5 className="sub-title right-line">{data?.subTitle}</h5>
              <h2 className="title">{data?.title}</h2>
              <p className="content">{data?.description}</p>
              <div className="choose-wrap mt-4">
                <div className="media single-choose-inner">
                  <div className="media-left">
                    <div className="icon">
                      <i className="icomoon-gear"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4>{data?.detailTitleOne}</h4>
                    <p>{data?.detailDescriptionOne} </p>
                  </div>
                </div>
                <div className="media single-choose-inner mb-3">
                  <div className="media-left">
                    <div className="icon">
                      <i className="icomoon-time"></i>
                    </div>
                  </div>
                  <div className="media-body">
                    <h4>{data?.detailTitleTwo}</h4>
                    <p>{data?.detailDescriptionTwo}</p>
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
