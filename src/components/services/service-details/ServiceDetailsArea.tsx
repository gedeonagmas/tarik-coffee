// import Image from "next/image";
// import Link from "next/link";
// import CommonFaq from "@/components/common/CommonFaq";

// import serviceDetailsThumb_1 from "@/assets/img/service/service-single.webp";
// import serviceDetailsThumb_2 from "@/assets/img/service/01.webp";

// interface ContentType {
//    desc_1: JSX.Element;
//    desc_2: JSX.Element;
//    service_list: {
//       id: number;
//       icon: string;
//       title: string;
//       desc: string;
//    }[];
//    widget_list: {
//       class_name: string;
//       title: string;
//       list: string[];
//    }[];
// }

// const service_content: ContentType = {
//    desc_1: (<>Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget elementum acondimentum eget, diam. Nam at tortor in tellus interdum sagitliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet.</>),
//    desc_2: (<>Lorem available market standard dummy text available market industry Lorem Ipsum simply dummy text of free available market.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</>),
//    service_list: [
//       {
//          id: 1,
//          icon: "icomoon-gear",
//          title: "Flexible Solutions",
//          desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
//       },
//       {
//          id: 2,
//          icon: "icomoon-time",
//          title: "24/7 Unlimited Support",
//          desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
//       },
//       {
//          id: 3,
//          icon: "icomoon-team",
//          title: "Flexible Solutions",
//          desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
//       },
//       {
//          id: 4,
//          icon: "icomoon-profile",
//          title: "24/7 Unlimited Support",
//          desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
//       },
//    ],
//    widget_list: [
//       {
//          class_name: "widget_catagory",
//          title: "Catagory",
//          list: ["Digital marketing", "Machine learning", "It management", "Loan & Insurance", "Web Design", "Digital Marketing", "IT Consultancy",]
//       },
//       {
//          class_name: "widget_archive",
//          title: "Achivment",
//          list: ["Digital marketing", "Machine learning", "It management", "Loan & Insurance", "Web Design", "Digital Marketing", "IT Consultancy",]
//       },
//    ]
// }

// const { desc_1, desc_2, service_list, widget_list } = service_content;

// const ServiceDetailsArea = () => {
//    return (
//       <div className="project-area pd-top-120 mb-4">
//          <div className="container">
//             <div className="row">
//                <div className="col-lg-8">
//                   <div className="blog-details-page-content">
//                      <div className="single-blog-inner">
//                         <div className="thumb">
//                            <Image src={serviceDetailsThumb_1} alt="img" />
//                         </div>
//                         <div className="details">
//                            <h2>It management</h2>
//                            {desc_1}
//                            {desc_2}
//                            <h4 className="pt-4 mb-4">Key benefits</h4>

//                            <div className="row">
//                               <div className="col-md-6">
//                                  {service_list.slice(0, 2).map((item) => (
//                                     <div key={item.id} className="media single-choose-inner">
//                                        <div className="media-left">
//                                           <div className="icon">
//                                              <i className={item.icon}></i>
//                                           </div>
//                                        </div>
//                                        <div className="media-body">
//                                           <h4>{item.title}</h4>
//                                           <p>{item.desc}</p>
//                                        </div>
//                                     </div>
//                                  ))}
//                               </div>
//                               <div className="col-md-6">
//                                  {service_list.slice(2, 4).map((item) => (
//                                     <div key={item.id} className="media single-choose-inner">
//                                        <div className="media-left">
//                                           <div className="icon">
//                                              <i className={item.icon}></i>
//                                           </div>
//                                        </div>
//                                        <div className="media-body">
//                                           <h4>{item.title}</h4>
//                                           <p>{item.desc}</p>
//                                        </div>
//                                     </div>
//                                  ))}
//                               </div>
//                            </div>

//                            <h4>More information</h4>

//                            <div className="row">
//                               <div className="col-md-8">
//                                  <div className="accordion mt-2" id="accordionExample">
//                                     <CommonFaq style={true} />
//                                  </div>
//                               </div>
//                               <div className="col-md-4 align-self-center mt-4 mt-lg-0">
//                                  <div className="thumb image-hover-animate border-radius-5">
//                                     <Image src={serviceDetailsThumb_2} alt="img" />
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-lg-4 col-12">
//                   <div className="td-service-sidebar">
//                      {widget_list.map((item, index) => (
//                         <div key={index} className={`widget ${item.class_name}`}>
//                            <h4 className="widget-title">{item.title}</h4>
//                            <ul className="catagory-items">
//                               {item.list.map((list, i) => (
//                                  <li key={i}><Link href="/blog">{list}</Link></li>
//                               ))}
//                            </ul>
//                         </div>
//                      ))}

//                      <div className="widget widget_catagory">
//                         <h4 className="widget-title">Download</h4>
//                         <ul className="catagory-items">
//                            <li><Link href="PDFLINK" download>Download PDF</Link></li>
//                            <li><Link href="PDFLINK" download>Download DOC</Link></li>
//                         </ul>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default ServiceDetailsArea

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ShimmerContentBlock } from "shimmer-effects-react";
import Breadcrumb from "@/components/common/Breadcrumb";

interface item {
  id: number;
  serviceName: string;
  description: string;
  details: string;
  banner: string;
  created_at: string;
  images: any;
}

const ServiceDetails = () => {
  const router = useParams();
  const { id } = router;

  const [service, setService] = useState<item>(); // Single service object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [services, setServices] = useState<item[]>();

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return; // Skip fetch if id is not available
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/service`
        );
        const filteredService = response.data.find(
          (service: item) => service.id === Number(id)
        );
        setServices(
          response.data?.filter((e: item) => e.id !== filteredService.id)
        );
        setService(filteredService);
      } catch (error) {
        setError("Error fetching products data");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  return (
    <>
      <Breadcrumb title={service?.serviceName} sub_title="Service Details" />
      <div
        style={{ marginTop: "50px", marginBottom: "40px" }}
        className="it-service-details__area pt-120 pb-70"
      >
        <div className="container">
          {error && !loading && !service && <p>{error}</p>}
          {!service && !loading && <p>No services found.</p>}
          {loading ? (
            <ShimmerContentBlock mode="light"></ShimmerContentBlock>
          ) : (
            service && (
              <>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="it-project-details__wrapper">
                      <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                          <div className="postbox__details-wrapper">
                            <article>
                              <div
                                className="postbox__thumb mb-2 w-img wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                                style={{
                                  position: "relative",
                                  height: "300px",
                                }}
                              >
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${service?.banner}`}
                                  alt={service?.serviceName || "product Image"}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  objectFit="cover" // Ensures consistent aspect ratio
                                />
                              </div>
                              <div
                                className="postbox__details-title-box pb-2 wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".7s"
                              >
                                <div className="post-info row mb_15 clearfix">
                                  <p>
                                    <Link href={`/product/${service.id}`}>
                                      Admin |{" "}
                                      {new Date(
                                        service?.created_at
                                      )?.toDateString()}
                                    </Link>
                                  </p>
                                </div>
                                <h4 className="postbox__details-title mb-2">
                                  {service?.serviceName}
                                </h4>
                                <span>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: service?.description,
                                    }}
                                  ></p>
                                </span>
                              </div>

                              <div
                                className="postbox__content pb-2 wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".9s"
                              >
                                <div className="postbox__content-img gap-4 mb-2 d-flex justify-content-between">
                                  {JSON.parse(service?.images)?.map(
                                    (e: item, i: number) => {
                                      return (
                                        <div
                                          key={i}
                                          className="col-lg-6 col-md-6 border col-sm-12 image-column"
                                        >
                                          <figure
                                            style={{
                                              position: "relative",
                                              width: "100%",
                                              height: "300px",
                                            }}
                                            className="image-box mb_10"
                                          >
                                            <Image
                                              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${e}`}
                                              alt={
                                                service?.serviceName ||
                                                "Event Image"
                                              }
                                              fill
                                              objectFit="cover" // Ensures consistent aspect ratio
                                            />
                                          </figure>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                                <div className="text-box">
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: service?.details,
                                    }}
                                  ></p>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                          <div className="sidebar__wrapper-box">
                            <div
                              className="sidebar__widget mb-2 wow tpfadeUp"
                              data-wow-duration=".9s"
                              data-wow-delay="1s"
                            >
                              <div className="sidebar__widge-title-box">
                                <h3 className="sidebar__widget-title">
                                  Other Services
                                </h3>
                              </div>
                              <div className="sidebar__widget-content">
                                <div className="sidebar__post">
                                  {services?.map((e, i) => {
                                    return (
                                      <div
                                        key={i}
                                        className="rc__post mb-2 d-flex"
                                      >
                                        <div className="rc__post-thumb mr-2">
                                          <Link href={`/service/${e?.id}`}>
                                            <figure
                                              style={{
                                                position: "relative",
                                                width: "100px",
                                                height: "70px",
                                              }}
                                            >
                                              <img
                                                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${e?.banner}`}
                                                alt="product of the image"
                                              />
                                            </figure>
                                          </Link>
                                        </div>
                                        <div
                                          style={{ marginLeft: "10px" }}
                                          className="rc__post-content"
                                        >
                                          <p
                                            style={{ fontWeight: "bolder" }}
                                            className="rc__post-title"
                                          >
                                            <Link href={`/service/${e?.id}`}>
                                              {e?.serviceName}
                                            </Link>
                                          </p>
                                          <div className="rc__meta">
                                            <span>
                                              {new Date(
                                                e?.created_at
                                              )?.toDateString()}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
