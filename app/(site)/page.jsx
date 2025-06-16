import Certifications from "@/components/Common/Certifications";
import Cta from "@/components/Common/Cta";
import BlogSection from "@/components/HomePage/BlogSection";
import CategoriesBento from "@/components/HomePage/CategoriesBento";
import HeroBanner from "@/components/HomePage/HeroBanner";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import {
  getBlogData,
  getCategoryData,
  getCertificationsData,
  getHomeData,
} from "@/sanity/fetchedData";

export const metadata = {
  title: "Tahum Global LLP",
  description: "",
};

export default async function Home() {
  const homeData = await getHomeData();
  const certificationData = await getCertificationsData();
  const blogData = await getBlogData();
  const categoryData = await getCategoryData();
  return (
    <main>
      <HeroBanner homeData={homeData} />
      <CategoriesBento categoryData={categoryData} />
      <WhoWeAre homeData={homeData} />
      <WhyChooseUs homeData={homeData} />
      <Certifications certificationData={certificationData} />
      <BlogSection blogData={blogData} />
      <Cta /> {/*done*/}
    </main>
  );
}
