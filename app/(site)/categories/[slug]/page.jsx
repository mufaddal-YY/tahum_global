import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import ProductCard from "@/components/Products/ProductCard";

import { getCategoryDetailData } from "@/sanity/fetchedData";

export const metadata = {
  title: "Tahum Global LLP",
  description: "",
};

const CategoryPage = async ({ params }) => {
  const { slug } = await params; // Await params here
  const categoryDetail = await getCategoryDetailData(slug);
  return (
    <main>
      <PageBanner
        headline={categoryDetail?.headline}
        subHeadline={categoryDetail?.subHeadline}
      />
      <main className="bg-white">
        <section className="py-[50px] container">
          <article className="flex flex-col lg:flex-row flex-wrap">
            {categoryDetail.products.map((data, idx) => (
              <div className="w-full lg:w-1/2 p-2" key={idx}>
                <ProductCard categoryDetail={categoryDetail} data={data} />
              </div>
            ))}
          </article>
        </section>
      </main>
      <Cta /> {/*done*/}
    </main>
  );
};

export default CategoryPage;
