export default {
  type: "object",
  name: "ctaPlug",
  title: "Call to action",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    { name: "image", type: "blockImage" },
    {
      name: "cta",
      type: "cta",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "label",
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title || "Title not set"}`,
        subtitle,
      };
    },
  },
};
