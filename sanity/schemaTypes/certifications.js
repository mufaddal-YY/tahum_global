export default {
  name: "certifications",
  title: "Certifications",
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
      name: "certificates",
      title: "Certificates",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "organizationTitle",
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
