"use client";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { Button } from "../ui/button";
import HeroProductSlider from "./HeroProductSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroBanner = ({ homeData }) => {
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
    cssEase: "linear",
  };

  return (
    <main>
      {homeData.map((item, i) => (
        <section key={i}>
          <article>
            <Slider {...settings} className="arrow-none">
              {item?.heroSlider?.map((data, index) => (
                <div key={index} className="relative h-[620px] w-full ">
                  {/* Background Image */}
                  <Image
                    className="object-cover rounded-[16px]"
                    layout="fill"
                    src={data?.sliderImage}
                    alt={data?.alt}
                  />

                  {/* Black overlay */}
                  <div className="absolute rounded-[16px] inset-0 bg-black opacity-70"></div>

                  {/* Text Content */}
                  <div className="absolute inset-0 flex items-center container">
                    <div className="text-white w-full lg:w-1/2 z-10">
                      <div className="py-4">
                        <span className="border border-white rounded-full py-2 px-4 capitalize">
                          {item?.welcomeStatement}
                        </span>
                      </div>
                      <h1 className="lg:text-5xl md:text-4xl text-[32px] leading-tight font-semibold mb-4">
                        {item?.headline}
                      </h1>
                      <p className="lg:w-3/4 text-lg w-full leading-tight font-regular mb-8">
                        {item?.subHeadline}
                      </p>
                      <div className="flex gap-2">
                        <Link href={"/categories"}>
                          <Button
                            size="lg"
                            variant="secondary"
                            className="bg-white cursor-pointer">
                            Explore Products
                          </Button>
                        </Link>
                        <Link href={"/categories"}>
                          <Button
                            size="lg"
                            variant="outlined"
                            className="border border-white cursor-pointer">
                            Get Quote <MdArrowForward />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    {/* ProductSliderCard Positioned Bottom-Right */}
                    <div className="absolute hidden md:flex lg:flex bottom-6 right-0 z-20">
                      <Carousel className="w-full max-w-md">
                        <CarouselContent>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <HeroProductSlider />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    </div>{" "}
                  </div>
                </div>
              ))}
            </Slider>
          </article>
        </section>
      ))}
    </main>
  );
};

export default HeroBanner;
