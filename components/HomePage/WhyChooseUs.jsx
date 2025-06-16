import Image from "next/image";
import { Separator } from "../ui/separator";

const WhyChooseUs = ({ homeData }) => {
  return (
    <main className="bg-gray-50">
      {homeData.map((item, idx) => (
        <section className="container py-[50px]" key={idx}>
          <div className="w-full p-4">
            <h4 className="text-3xl lg:text-4xl mb-4 text-primary font-semibold">
              {item?.whyChooseHeadline}
            </h4>
            <p className="text-md w-full lg:w-3/4 lg:text-lg mb-4 text-primary font-regular">
              {item?.whyChooseUsDescription}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap ">
            {item.whyChoosePointers.map((data, i) => (
              <div key={i} className="w-full lg:w-1/3 flex flex-col p-2">
                {/* Card */}
                <div className="p-4 w-full min-h-[200px] bg-white border-2 border-gray-200 hover:bg-[#1D3974] hover:text-white rounded-xl shadow-[0px_0px_10px_1px_#edf2f7] text-center lg:text-left flex flex-col">
                  <div className="w-[50px] h-[50px] rounded-lg bg-gray-50 p-2 flex items-center justify-center mx-auto lg:mx-0">
                    <Image
                      src={data?.icon}
                      width={50}
                      height={50}
                      alt={data?.alt}
                    />
                  </div>
                  <h4 className="text-xl font-semibold py-2">{data?.title}</h4>
                  <Separator className="my-2" />
                  <p className="text-lg ">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default WhyChooseUs;
