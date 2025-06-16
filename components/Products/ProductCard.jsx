import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProductCard = ({ categoryDetail, data }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 rounded-2xl border-2 border-gray-100">
      <div className="relative w-full lg:w-[300px] h-[300px] rounded-xl overflow-hidden">
        <Image
          src={data?.thumbnailImage}
          alt={data?.productTitle}
          fill
          objectPosition="center center"
          className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between px-4 py-3">
        <div className="text-left">
          <h4 className="text-xl lg:text-2xl font-semibold text-gray-800">
            {data?.productTitle}
          </h4>
          <p className="text-md py-2 font-regular text-gray-600">
            {data?.subTitle}
          </p>
        </div>
        <div className="py-4">
          <Link
            href={`/categories/${categoryDetail.slug}/${data?.productSlug}`}>
            <Button
              size="lg"
              className="py-2 font-medium flex items-center gap-1">
              Read more <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
