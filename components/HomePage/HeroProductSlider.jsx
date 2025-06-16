import Image from "next/image";
import { Button } from "../ui/button";

const HeroProductSlider = () => {
  return (
    <div className="w-full lg:w-3/4 lg:ml-auto rounded-xl border border-white bg-white/10 backdrop-blur-md p-2 flex items-center gap-4">
      {/* Product Image */}
      <div className="bg-white rounded-lg">
        <Image
          src="/productImage.png" // replace this with your actual image path
          alt="Product"
          width={180}
          height={180}
          className="rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className=" flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Product Title
          </h2>
          <p className="text-sm text-white/80 mb-4">
            This is a short description of the product.
          </p>
        </div>

        {/* Button */}
        <Button
          variant="secondary"
          className="self-start bg-white border-2 border-white transition">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default HeroProductSlider;
