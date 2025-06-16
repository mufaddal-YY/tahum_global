import Image from "next/image";
import React from "react";
import PortableTextComponent from "../ui/PortableTextComponent";

const WhoWeAre = ({ homeData }) => {
  return (
    <main className="bg-white">
      <section className="py-[50px] container">
        {homeData?.map((item, idx) => (
          <article
            className="flex gap-2 flex-col lg:flex-row items-center"
            key={idx}>
            <div className="bg-primary rounded-xl w-full lg:w-1/2 p-4 lg:p-6 h-auto lg:min-h-[550px]">
              <div className="flex flex-col gap-4">
                <p className="text-white text-md">Who we are?</p>
                <h4 className="text-3xl lg:text-4xl text-white font-semibold capitalize">
                  {item?.whoWeAreTitle}
                </h4>
                <div className="relative w-full h-[350px] overflow-hidden rounded-lg py-2">
                  <Image
                    src={item?.whoWeAreImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center right"
                    alt="Who We Are Image"
                    className="py-2 rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="bg-primary text-white text-lg lg:text-xl rounded-xl w-full lg:w-1/2 p-4 lg:p-8 h-auto lg:min-h-[550px]">
              <PortableTextComponent content={item?.whoWeAreDescription} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default WhoWeAre;
