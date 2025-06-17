import BlogCard from "@/components/Blogs/BlogCard";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getBlogData } from "@/sanity/fetchedData";

const BlogPage = async () => {
  const blogData = await getBlogData();
  return (
    <main>
      <PageBanner headline={"Blogs"} subHeadline={""} />
      <article className="py-[50px] container">
        <div className="flex flex-col lg:flex-row flex-wrap">
          {blogData.map((item, idx) => (
            <div className="w-full lg:w-1/3 p-2" key={idx}>
              <BlogCard
                mainImage={item.mainImage}
                title={item.title}
                slug={item.slug}
                excerpt={item.excerpt}
              />
            </div>
          ))}
        </div>
      </article>
      <Cta /> {/*done*/}
    </main>
  );
};

export default BlogPage;
