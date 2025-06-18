"use client";
import Image from "next/image";
import Slider from "react-slick";
import { Separator } from "../ui/separator";

const Certifications = ({ certificationData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="bg-white">
      {certificationData.map((item, idx) => (
        <section className="container py-[50px]" key={idx}>
          <article className="w-full p-4">
            <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
              {item?.headline}
            </h4>
            <p className="text-md w-full lg:w-3/4 lg:text-lg mb-4 text-primary font-regular">
              {item?.subHeadline}
            </p>
          </article>
          <article className="my-4 bg-white border-2 border-gray-200 rounded-2xl">
            <Slider {...settings}>
              {item?.certificates.map((data, index) => (
                <div className="flex p-2" key={index}>
                  <div className="certificate-card flex flex-col justify-center items-center w-full p-2">
                    <Image
                      src={data?.logo}
                      alt={data?.organizationTitle}
                      width={200}
                      height={200}
                    />

                    <div className="w-full bg-white text-center pt-4">
                      <p className="text-xl font-semibold text-primary">
                        {data?.organizationTitle}
                      </p>
                    </div>
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

export default Certifications;
