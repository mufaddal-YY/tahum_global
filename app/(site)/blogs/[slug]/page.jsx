import BlogDetailSection from "@/components/Blogs/BlogDetailSection";
import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import { getBlogData, getBlogDetailData } from "@/sanity/fetchedData";

export const metadata = {
  title: "Tahum Global LLP",
  description: "",
};

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params; // Await params here
  const blogDetail = await getBlogDetailData(slug);
  const blogData = await getBlogData();
  console.log(blogDetail);
  return (
    <main>
      <PageBanner
        headline={blogDetail?.title}
        subHeadline={blogDetail?.excerpt}
      />
      <BlogDetailSection blogData={blogData} blogDetail={blogDetail} />
      <Cta /> {/*done*/}
    </main>
  );
};

export default BlogDetailPage;
