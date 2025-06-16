"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CategoriesBento = ({ categoryData }) => {
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
    fade: true,
  };
  return (
    <main className="bg-white">
      <section className="container pt-[50px]">
        <div className="w-full">
          <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
            Categories we offer
          </h4>
          <p className="text-md w-full lg:w-3/4 lg:text-lg mb-4 text-primary font-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet,
          </p>
        </div>
      </section>

      <section className="container mx-auto pb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Column */}
        <div className="flex flex-col col-span-1 gap-4">
          {categoryData.slice(0, 2).map((cat) => (
            <div
              key={cat._id}
              className="relative w-full h-[300px] md:h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
              <Image
                src={cat.thumbnailImage} // fixed typo: 'thumbnaiImage' to 'thumbnailImage'
                alt={cat.headline}
                fill
                className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              <div className="absolute bottom-2 w-3/4 h-12 text-center left-1/2 transform -translate-x-1/2 bg-white text-primary font-semibold px-4 py-3 rounded-lg shadow">
                {cat.headline}
              </div>
            </div>
          ))}{" "}
        </div>

        {/* Second Column (Wider) */}
        <div className="flex flex-col justify-center col-span-1 lg:col-span-1 ">
          <Slider {...settings} className="arrow-none">
            {categoryData.map((data, idx) => (
              <div
                className="relative w-full h-[300px] md:h-[350px] lg:h-[620px] rounded-xl overflow-hidden"
                key={idx}>
                <Image
                  src={data?.thumbnailImage} // fixed typo here too
                  alt={data?.headline}
                  fill
                  objectPosition="center center"
                  className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <div className="absolute bottom-2 w-3/4 h-12 text-center left-1/2 transform -translate-x-1/2 bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow">
                  {data?.headline}
                </div>
                <div className="absolute top-2 right-2 max-w-sm">
                  <Link href={`/categories/${data?.slug}`}>
                    <Button
                      variant="secondary"
                      className="bg-white items-center">
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-4 col-span-1">
          {categoryData.slice(2).map((cat) => (
            <div
              key={cat._id}
              className="relative w-full h-[300px] md:h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
              <Image
                src={cat.thumbnailImage}
                alt={cat.headline}
                fill
                className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              <div className="absolute w-3/4 h-12 text-center bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-primary font-semibold px-2 py-3 rounded-lg shadow">
                {cat.headline}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoriesBento;
