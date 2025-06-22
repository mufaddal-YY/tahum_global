"use client";
import Image from "next/image";
import Slider from "react-slick";
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
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import EnquiryForm from "../Common/EnquiryForm";

const HeroBanner = ({ homeData, categoryDetail, productsData }) => {
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
    <main className="px-2">
      {homeData.map((item, i) => (
        <section key={i}>
          <article>
            <div className="relative h-[100vh] lg:h-[90vh] w-full ">
              {/* Background Image */}
              {/* <Image
                    className="object-cover rounded-[24px]"
                    objectPosition="center center"
                    layout="fill"
                    src={data?.sliderImage}
                    alt={data?.alt}
                  /> */}
              {/* Background Video */}
              <video
                className="object-cover w-full h-full rounded-[24px]"
                autoPlay
                loop
                muted
                playsInline
                preload="auto">
                <source src={"/heroVideo.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Black overlay */}
              <div className="absolute rounded-[24px] inset-0 bg-black opacity-60"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex items-center container">
                <div className="text-white w-full lg:w-1/2 z-10">
                  <div className="py-4">
                    <span className="border text-sm border-white rounded-full py-1 px-2 capitalize">
                      {item?.welcomeStatement}
                    </span>
                  </div>
                  <h1 className="lg:text-5xl md:text-4xl text-[32px] leading-tight font-semibold mb-4">
                    {item?.headline}
                  </h1>
                  <p className="lg:w-3/4 text-lg w-full leading-snug font-regular mb-6">
                    {item?.subHeadline}
                  </p>
                  <div className="flex gap-2">
                    <Link href={"/#categories"}>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white cursor-pointer">
                        Explore Products
                      </Button>
                    </Link>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          variant="outlined"
                          className="border border-white cursor-pointer">
                          Get Quote <MdArrowForward />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[600px] overflow-y-scroll">
                        <EnquiryForm />
                      </DialogContent>
                    </Dialog>
                  </div>
                  {/* <div className="py-8 flex md:hidden lg:hidden">
                        <Carousel
                          plugins={[
                            Autoplay({
                              delay: 3000,
                            }),
                          ]}
                          className="mx-auto w-full max-w-md">
                          <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                              <CarouselItem key={index}>
                                <HeroProductSlider />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                      </div>{" "} */}
                </div>
                {/* ProductSliderCard Positioned Bottom-Right */}

                <div className="absolute hidden md:flex lg:flex bottom-6 right-0 z-20">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 3000,
                      }),
                    ]}
                    className="w-full max-w-md">
                    <CarouselContent>
                      {productsData.map((data, idx) => (
                        <CarouselItem key={idx}>
                          <HeroProductSlider
                            thumbnailImage={data?.thumbnailImage}
                            productTitle={data?.productTitle}
                            subTitle={data?.subTitle}
                            productSlug={data?.productSlug}
                            slug={categoryDetail?.slug}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
          </article>
        </section>
      ))}
    </main>
  );
};

export default HeroBanner;
