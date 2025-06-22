import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         welcomeStatement,
         headline,
         subHeadline,
         heroSlider[]{
         "sliderImage": sliderImage.asset->url,
         alt,
         },
         whoWeAreTitle,
         whoWeAreDescription,
         "whoWeAreImage": whoWeAreImage.asset->url,
         whyChooseHeadline,
         whyChooseUsDescription,
         whyChoosePointers[]{
          title,
          description,
          "icon": icon.asset->url,
          alt,
         },
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getAboutData() {
  const result = await client.fetch(
    groq`*[_type == "about"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         aboutContent,
         "aboutImage": aboutImage.asset->url,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getCategoryData() {
  const result = await client.fetch(
    groq`*[_type == "categories"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         "slug": slug.current,
         "thumbnailImage": thumbnailImage.asset->url,
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getCategoryDetailData(slug) {
  return client.fetch(
    groq`*[_type == "categories" && slug.current == $slug][0]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         "slug": slug.current,
         categoryContent,
         "thumbnailImage": thumbnailImage.asset->url,
         products[]{
          productTitle,
          "productSlug": productSlug.current,
          subTitle,
          "thumbnailImage": thumbnailImage.asset->url,
          productDescription,
          productImages[]{
           "image": image.asset->url,
           alt,
          },
          additionalDetails[]{
           title,
           description,
           "image": image.asset->url,
           alt,
          },
         },
        }`,
    { slug, defaultFetchOptions }
  );
}

export async function getProductDetailData(productSlug) {
  return client.fetch(
    groq`
      *[_type == "categories" && products[].productSlug.current match $productSlug][0] {
        "products": products[productSlug.current == $productSlug][0] {
          productTitle,
          "productSlug": productSlug.current,
          subTitle,
          "thumbnailImage": thumbnailImage.asset->url,
          productDescription,
          productImages[]{
           "image": image.asset->url,
           alt,
          },
          additionalDetails[]{
           title,
           description,
           "image": image.asset->url,
           alt,
          },
        }
      }
    `,
    { productSlug, defaultFetchOptions }
  );
}

export async function getCertificationsData() {
  const result = await client.fetch(
    groq`*[_type == "certifications"]{
         _id,
          _createdAt,
         headline,
         subHeadline,
         certificates[]{
          organizationTitle,
          "logo": logo.asset->url,
         },
         
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTestimonialsData() {
  const result = await client.fetch(
    groq`*[_type == "testimonials"]{
         _id,
          _createdAt,
         headline,
         subHeadline,
         reviews[]{
          customerName,
          designation,
          reviewText,
         },
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getClienteleData() {
  const result = await client.fetch(
    groq`*[_type == "clientele"]{
         _id,
          _createdAt,
         headline,
         subHeadline,
         clients[]{
          title,
          "logo": logo.asset->url,
         },
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getBlogData() {
  const result = await client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      publishedAt,
      metaTitle,
      metaDescription,
      metaKeywords,
      excerpt,
      "mainImage": mainImage.asset->url,
      author,
    }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getBlogDetailData(slug) {
  const result = await client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      publishedAt,
      metaTitle,
      metaDescription,
      metaKeywords,
      excerpt,
      "mainImage": mainImage.asset->url,
      author,
      content,
    }`,
    { slug }
  );
  return result;
}

export async function getContactData() {
  const result = await client.fetch(
    groq`*[_type == "contact"]{
         _id,
         _createdAt,
        email,
        contact,
        whatsapp,
        address,
        linkedin,
        instagram,
        facebook,
        youtube,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getRefundPolicyData() {
  const result = await client.fetch(
    groq`*[_type == "refundPolicy"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         content,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTermsData() {
  const result = await client.fetch(
    groq`*[_type == "terms"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         content,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getPrivacyData() {
  const result = await client.fetch(
    groq`*[_type == "privacyPolicy"]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         content,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}
