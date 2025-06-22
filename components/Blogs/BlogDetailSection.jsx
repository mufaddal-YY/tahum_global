import Link from "next/link";
import PortableTextComponent from "../ui/PortableTextComponent";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const BlogDetailSection = ({ blogData, blogDetail }) => {
  return (
    <main className="bg-white">
      <section className=" container py-8 ">
        <article className="flex flex-col lg:flex-row gap-4">
          {/* Main Blog Content */}
          <article className="w-full lg:w-2/3">
            {/* Blog Main Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src={blogDetail?.mainImage}
                alt={blogDetail?.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title & Meta */}
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
              {blogDetail?.title}
            </h1>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-gray-500 text-sm mb-6">
                ~ by {blogDetail?.author} |
              </p>
              <p className="text-gray-500 text-sm mb-6">
                {new Date(blogDetail?.publishedAt).toLocaleDateString()}
              </p>
            </div>

            {/* Portable Text Content */}
            <div className="prose prose-lg max-w-none">
              <PortableTextComponent content={blogDetail?.content} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 ">
            <div className="flex flex-col gap-4 sticky-enquiry-form">
              {blogData.slice(0, 3).map((blog) => (
                <div
                  key={blog._id}
                  className="flex gap-4 rounded-2xl border-2 border-gray-100">
                  <Image
                    src={blog.mainImage}
                    alt={blog.title}
                    width={150}
                    height={150}
                    className="rounded-xl bg-primary object-cover w-[150px] h-[150px] transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <div className="flex flex-col justify-between gap-4 h-[100px] p-4">
                    <Link target="_blank" href={`/blogs/${blog?.slug}`}>
                      <h4 className="text-sm font-regular text-gray-800 cursor-pointer lg:pt-2">
                        {blog.title}
                      </h4>
                    </Link>

                    <Link target="_blank" href={`/blogs/${blog?.slug}`}>
                      <button className="text-primary text-md pb-2 font-medium cursor-pointer flex items-center gap-1">
                        Read more <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
};

export default BlogDetailSection;
