export default {
  name: "about",
  title: "About",
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
      title: "Headline",
      type: "string",
    },
    {
      name: "aboutContent",
      title: "About Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
