"use client";
import work_data from "@/data/WorkData";

const WorkArea = () => {
  return (
    <div className="how-it-work-area bg-blue pd-top-110 pd-top-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title style-white text-center">
              <h5 className="sub-title double-line">Work Process</h5>
              <h2 className="title">From source to global export</h2>
              <p className="content">
                our streamlined process ensures the finest coffee reaches your
                cup
              </p>
            </div>
          </div>
        </div>
        <div className="row pd-bottom-100">
          {work_data
            .filter((items) => items.page === "home_1")
            .map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div className="single-work-inner style-two text-center">
                  <div className="count-wrap">
                    <div className="count-inner">
                      <h2>{item.count}</h2>
                    </div>
                  </div>
                  <div className="details-wrap">
                    <div className="details-inner">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkArea;
