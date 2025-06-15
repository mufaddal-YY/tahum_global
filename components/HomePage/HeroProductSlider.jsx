import Image from "next/image";
import { Button } from "../ui/button";

const HeroProductSlider = ({}) => {
  return (
    <div className="max-w-sm mx-auto rounded-xl border border-white bg-white/10 backdrop-blur-md p-2 flex items-center gap-4">
      {/* Product Image */}
      <div className="w-1/2 bg-white rounded-lg">
        <Image
          src="/productImage.png" // replace this with your actual image path
          alt="Product"
          width={150}
          height={150}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Product Title
          </h2>
          <p className="text-sm text-white/80 mb-4">
            This is a short description of the product. Highlight its best
            feature.
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
