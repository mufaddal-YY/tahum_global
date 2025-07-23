"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Button } from "../ui/button";
import PortableTextComponent from "../ui/PortableTextComponent";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";

const ProductDetailSection = ({ detailData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3300,
  };
  return (
    <main className="bg-white">
      <section className="py-[50px] container">
        <div className="flex gap-2 flex-col lg:flex-row rounded-xl border-2 border-gray-100 shadow-custom">
          <div className="w-full lg:w-1/3 p-2">
            <div className="flex flex-col gap-2 sticky-enquiry-form">
              {detailData?.productImages?.length > 1 ? (
                <Slider {...settings} className="arrow-none">
                  {detailData?.productImages.map((data, idx) => (
                    <div
                      className="relative w-full h-[500px] overflow-hidden rounded-lg py-2"
                      key={idx}>
                      <Image
                        src={data?.image}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                        alt={`Product Image ${idx + 1}`}
                        className="rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="relative w-full h-[500px] overflow-hidden rounded-lg py-2">
                  <Image
                    src={detailData?.productImages?.[0]?.image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    alt="Product Image"
                    className="rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl w-full lg:w-2/3 p-2">
            <h4 className="text-2xl lg:text-3xl py-4 text-primary font-semibold capitalize">
              Product Description
            </h4>

            <Separator className="my-2" />
            <PortableTextComponent content={detailData?.productDescription} />
            <div className="my-4 bg-gray-50 p-2 rounded-xl">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1">
                {detailData?.additionalDetails?.map((data, i) => (
                  <AccordionItem value="item-1" key={i}>
                    <AccordionTrigger className="text-xl font-semibold">
                      {data?.title}
                    </AccordionTrigger>
                    <AccordionContent className="">
                      <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-1/3">
                          <div className="relative w-full h-[200px] overflow-hidden rounded-lg py-2">
                            <Image
                              src={data?.image}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center center"
                              alt="Additional Image"
                              className="rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-105"
                            />{" "}
                          </div>
                        </div>
                        <div className="w-full text-md lg:text-md lg:w-2/3">
                          <PortableTextComponent content={data?.description} />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailSection;
