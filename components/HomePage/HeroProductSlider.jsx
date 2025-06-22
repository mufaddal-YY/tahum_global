import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroProductSlider = ({
  thumbnailImage,
  productTitle,
  subTitle,
  productSlug,
}) => {
  return (
    <div className="w-full lg:w-3/4 lg:ml-auto rounded-xl border border-white bg-white/10 backdrop-blur-md p-2 flex items-center gap-4">
      {/* Product Image */}
      <div className="bg-white w-[180px] h-[180px] rounded-xl">
        <Image
          src={thumbnailImage} // replace this with your actual image path
          alt="Product"
          width={220}
          height={220}
          className="rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className=" flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            {productTitle}
          </h2>
          <p className="text-sm text-white/80 mb-4">
            {subTitle?.split(" ").slice(0, 6).join(" ")}
            {subTitle?.split(" ").length > 6 && "..."}
          </p>
        </div>

        {/* Button */}
        <Link href={`/categories/millets/${productSlug}`}>
          <Button
            variant="secondary"
            className="self-start bg-white border-2 border-white transition">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroProductSlider;
