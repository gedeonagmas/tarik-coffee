import pricing_data from "@/data/PricingData";
import Link from "next/link";

const PricingPlan = () => {
   return (
      <div className="pricing-area pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-xl-6">
                     <h5 className="sub-title right-line">Pricing Plan</h5>
                     <h2 className="title">Let&apos;s check our latest price</h2>
                     <p className="content mt-2">Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed consequat</p>
                  </div>
                  <div className="col-xl-6 align-self-center">
                     <div className="btn-wrap text-lg-end mt-4 mt-lg-0">
                        <Link className="it-btn btn-border-base" href="/service">Discover More Service</Link>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {pricing_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-pricing-inner style-1">
                        <div className="header">
                           <h3 className="text-center">{item.plan}</h3>
                           <div className="price">
                              <sup>$</sup>
                              <h2 className="d-inline-block">{item.price}</h2>
                              <sub>per month billed annually</sub>
                           </div>
                        </div>
                        <div className="details d-grid">
                           <ul className="single-list-inner">
                              {item.pricing_list.map((list, i) => (
                                 <li key={i} className={list.class_name}>{list.list}</li>
                              ))}
                           </ul>
                           <Link className="it-btn btn-black w-100" href="#">Get Started</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingPlan
