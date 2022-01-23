export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  fieldsets: [
    {
      title: "Link",
      name: "link",
      description: "Only the first value of these will be used",
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "External link",
      name: "link",
      type: "string",
      description: "Example: https://www.sanity.io",
      fieldset: "link",
    },
  ],
  preview: {
    select: {
      title: "title",
      link: "link",
    },
    prepare({ title, link }) {
      let subtitle = "Not set";
      if (link) {
        subtitle = `External: ${link}`;
      }
      return {
        title,
        subtitle,
      };
    },
  },
};
