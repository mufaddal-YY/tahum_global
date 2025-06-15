
export default {
  name: "clientele",
  title: "Clientele",
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
      name: "clients",
      title: "Clients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Organization Title",
              type: "string",
            },
            {
              name: "logo",
              title: "Organization Logo",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
  ],
};
