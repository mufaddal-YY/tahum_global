export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
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
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "customerName",
              title: "Customer name",
              type: "string",
            },
            {
              name: "designation",
              title: "Designation",
              type: "string",
            },
            {
              name: "reviewText",
              title: "Review",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
