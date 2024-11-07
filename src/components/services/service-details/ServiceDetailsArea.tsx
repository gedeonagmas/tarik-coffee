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
                                <div className="postbox__content-img gap-4 mb-2 mr-6 d-flex justify-content-between">
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
                          <img
                            src="/assets/img/about/2.jpg"
                            className="w-full mb-4 h-96"
                              alt=""
                              loading="lazy"
                          />
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
                                                loading="lazy"
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
