import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BlogSection = ({ blogData }) => {
  return (
    <main className="bg-white">
      <section className="container mx-auto py-[50px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="py-4">
            <h3 className="text-3xl text-primary font-semibold">
              Grow your knowledge
            </h3>
            <p className="text-md py-2 lg:text-lg text-gray-600 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet,{" "}
            </p>
          </div>
          {/* Left Main Card */}
          <div className="rounded-xl shadow border-2 border-gray-200 shadow-custom">
            <Image
              src={blogData[3].mainImage}
              alt={blogData[3].title}
              width={400}
              height={350}
              className="rounded-t-xl h-[350px] w-full object-cover"
            />
            <div className="mt-4 p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {blogData[0].title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                {blogData[0].excerpt}
              </p>
              <button className="mt-4 text-primary font-medium flex items-center gap-1">
                Read more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Cards */}
        <div className="flex flex-col gap-6">
          {blogData.slice(0, 3).map((blog) => (
            <div
              key={blog._id}
              className="flex items-center gap-4 rounded-2xl border-2 border-gray-100">
              <Image
                src={blog.mainImage}
                alt={blog.title}
                width={150}
                height={150}
                className="rounded-xl bg-primary object-cover w-[200px] h-[200px] transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
              <div className="flex flex-col justify-between h-[200px] p-4 flex-1">
                <h4 className="text-md lg:text-xl font-semibold text-gray-800 lg:pt-2">
                  {blog.title}
                </h4>
                <button className="text-primary text-lg pb-2 font-medium flex items-center gap-1">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogSection;
