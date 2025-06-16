export default {
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
    },
    {
      name: "headline",
      title: "Title",
      type: "string",
    },
    {
      name: "subHeadline",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "headline",
        maxLength: 96,
      },
    },
    {
      name: "categoryContent",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "productTitle",
              title: "Product Title",
              type: "string",
            },
            {
              name: "productSlug",
              title: "Slug",
              type: "slug",
              options: {
                source: (doc, { parent }) => parent?.productTitle || "",
                maxLength: 96,
              },
            },
            {
              name: "subTitle",
              title: "Sub Title",
              type: "string",
            },
            {
              name: "thumbnailImage",
              title: "Thumbnail Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            {
              name: "productDescription",
              title: "Product Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
            {
              name: "productImages",
              title: "Product Images",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      options: {
                        hotspot: true, // <-- Defaults to false
                      },
                    },
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "additionalDetails",
              title: "Additional Details",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "description",
                      title: "Description",
                      type: "array",
                      of: [
                        {
                          type: "block",
                        },
                      ],
                    },
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      options: {
                        hotspot: true, // <-- Defaults to false
                      },
                    },
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
