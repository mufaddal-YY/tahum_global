import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogSection = ({ blogData }) => {
  return (
    <main className="bg-white">
      <section className="container mx-auto py-[50px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="">
          <div className="py-4">
            <h3 className="text-3xl text-primary font-semibold">Tahum Talks</h3>
            <p className="text-md py-2 lg:text-lg text-gray-600 font-medium">
              Stay informed with the latest on global trade, food trends, and
              wellness insights, all from the team at Tahum Global.
            </p>
          </div>
          {/* Left Main Card */}
          <div className="rounded-xl shadow border-2 border-gray-200 shadow-custom">
            <Link target="_blank" href={`/blogs/${blogData[0]?.slug}`}>
              <Image
                src={blogData[0].mainImage}
                alt={blogData[0].title}
                width={400}
                height={350}
                className="rounded-t-xl h-[350px] w-full object-cover cursor-pointer"
              />
            </Link>
            <div className="mt-4 p-4">
              <Link target="_blank" href={`/blogs/${blogData[0]?.slug}`}>
                <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">
                  {blogData[0].title}
                </h3>
              </Link>
              <p className="text-gray-500 mt-2 text-sm">
                {blogData[0].excerpt}
              </p>
              <Link target="_blank" href={`/blogs/${blogData[0]?.slug}`}>
                <button className="mt-4 text-primary cursor-pointer font-medium flex items-center gap-1">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column Cards */}
        <aside className=" ">
          <div className="flex flex-col gap-4">
            {blogData?.slice(0, 3).map((blog) => (
              <div
                key={blog._id}
                className="flex gap-2 items-center lg:gap-4 rounded-2xl border-2 border-gray-100">
                <Image
                  src={blog?.mainImage}
                  alt={blog?.title}
                  width={150}
                  height={150}
                  className="rounded-xl bg-primary object-cover lg:w-[200px] lg:h-[200px] transform transition-transform duration-500 ease-in-out hover:scale-105"
                />

                <div className="flex flex-col justify-between gap-4 h-[100px] lg:h-[200px] p-1 lg:p-4">
                  <Link target="_blank" href={`/blogs/${blog?.slug}`}>
                    <h4 className="text-sm lg:text-lg font-regular text-gray-800 cursor-pointer lg:pt-2">
                      {blog?.title}
                    </h4>
                  </Link>
                  <Link target="_blank" href={`/blogs/${blog?.slug}`}>
                    <button className="text-primary text-md pb-2 font-medium flex items-center cursor-pointer gap-1">
                      Read more <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default BlogSection;
