"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { ShimmerContentBlock } from "shimmer-effects-react";
import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";

interface item {
  id: number;
  title: string;
  description: string;
  details: string;
  banner: string;
  created_at: string;
  images: any;
}

const ProductDetails = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/products-list`
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
      <Breadcrumb title="Product Details" sub_title={service?.title} />
      <div
        style={{ marginTop: "50px", marginBottom: "40px" }}
        className="it-project-details__area pt-120 pb-90"
      >
        <div className="container">
          {error && !loading && !service && <p>{error}</p>}
          {!service && !loading && <p>No products found.</p>}
          {loading ? (
            <ShimmerContentBlock
              mode="light"
              center={true}
              height={200}
              width={300}
            ></ShimmerContentBlock>
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
                                className="postbox__thumb mb-20 w-img wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                                style={{
                                  position: "relative",
                                  height: "300px",
                                }}
                              >
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${service?.banner}`}
                                  alt={service?.title || "product Image"}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  objectFit="cover" // Ensures consistent aspect ratio
                                />
                              </div>
                              <div
                                className="postbox__details-title-box pb-40 wow tpfadeUp"
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
                                <h4 className="postbox__details-title mb-20">
                                  {service?.title}
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
                                className="postbox__content pb-20 wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay=".9s"
                              >
                                <div className="postbox__content-img mb-60 d-flex justify-content-between">
                                  {JSON.parse(service?.images)?.map(
                                    (e: item) => {
                                      return (
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                          <figure
                                            style={{
                                              position: "relative",
                                              width: "100%",
                                              height: "300px",
                                            }}
                                            className="image-box mb_30"
                                          >
                                            <Image
                                              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${e}`}
                                              alt={
                                                service.title || "Event Image"
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
                              className="sidebar__widget mb-40 wow tpfadeUp"
                              data-wow-duration=".9s"
                              data-wow-delay="1s"
                            >
                              <div className="sidebar__widge-title-box">
                                <h3 className="sidebar__widget-title">
                                  Related Products
                                </h3>
                              </div>
                              <div className="sidebar__widget-content">
                                <div className="sidebar__post">
                                  {services?.map((e) => {
                                    return (
                                      <div className="rc__post mb-20 d-flex">
                                        <div className="rc__post-thumb mr-20">
                                          <Link href={`/product/${e?.id}`}>
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
                                          style={{ marginLeft: "20px" }}
                                          className="rc__post-content"
                                        >
                                          <p
                                            style={{ fontWeight: "bold" }}
                                            className="rc__post-title"
                                          >
                                            <Link href={`/product/${e?.id}`}>
                                              {e?.title}
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

export default ProductDetails;