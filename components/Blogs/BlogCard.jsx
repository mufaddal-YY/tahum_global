import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ mainImage, title, slug, excerpt }) => {
  return (
    <div className="rounded-xl shadow border-2 border-gray-200 shadow-custom">
      <Link className="cursor-pointer" href={`/blogs/${slug}`}>
        <Image
          src={mainImage}
          alt={title}
          width={400}
          height={350}
          className="rounded-t-xl h-[350px] w-full object-cover"
        />
      </Link>

      <div className="p-4">
        <Link className="cursor-pointer" href={`/blogs/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </Link>
        <p className="text-gray-500 mt-2 text-sm">{excerpt}</p>
        <Link href={`/blogs/${slug}`}>
          <button className="mt-4 cursor-pointer text-primary font-medium flex items-center gap-1">
            Read more <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
