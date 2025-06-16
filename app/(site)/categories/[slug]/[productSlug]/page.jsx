import Cta from "@/components/Common/Cta";
import PageBanner from "@/components/Common/PageBanner";
import ProductDetailSection from "@/components/Products/ProductDetailSection";
import { getProductDetailData } from "@/sanity/fetchedData";

export const metadata = {
  title: "Tahum Global LLP",
  description: "",
};

const ProductPage = async ({ params }) => {
  const { productSlug } = await params;
  const productDetail = await getProductDetailData(productSlug);
  const detailData = productDetail.products;
  return (
    <main>
      <div>
        <PageBanner
          headline={detailData?.productTitle}
          subHeadline={detailData?.subTitle}
        />
      </div>
      <ProductDetailSection detailData={detailData} />
      <Cta /> {/*done*/}
    </main>
  );
};

export default ProductPage;
