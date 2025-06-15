export default {
  name: "home",
  title: "Home",
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
      name: "welcomeStatement",
      title: "Welcome Statement",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "heroSlider",
      title: "Hero Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "sliderImage",
              title: "Slider Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "whoWeAreTitle",
      title: "Title | Who We Are ",
      type: "string",
    },
    {
      name: "whoWeAreDescription",
      title: "Description | Who we are",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "whoWeAreImage",
      title: "Who We Are Image",
      type: "image",
      options: {
        hotspot: false, // <-- Defaults to false
      },
    },
    {
      name: "whyChooseHeadline",
      title: "Why Choose Us Headline",
      type: "string",
    },
    {
      name: "whyChooseUsDescription",
      title: "Why Choose Us Description",
      type: "string",
    },
    {
      name: "whyChoosePointers",
      title: "Why Choose Pointers",
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
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
