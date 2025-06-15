import Certifications from "@/components/Common/Certifications";
import Cta from "@/components/Common/Cta";
import BlogSection from "@/components/HomePage/BlogSection";
import CategoriesBento from "@/components/HomePage/CategoriesBento";
import HeroBanner from "@/components/HomePage/HeroBanner";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import { getHomeData } from "@/sanity/fetchedData";

export const metadata = {
  title: "Tahum Global LLP",
  description: "",
};

export default async function Home() {
  const homeData = await getHomeData();
  return (
    <main>
      <HeroBanner homeData={homeData} />
      <CategoriesBento />
      <WhoWeAre />
      <WhyChooseUs />
      <Certifications />
      <BlogSection />
      <Cta />
    </main>
  );
}
