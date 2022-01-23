export default {
  type: "object",
  name: "socials",
  title: "Socials",
  fields: [
    {
      type: "array",
      name: "columns",
      of: [{ type: "mainImage" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Socials Grid`,
      };
    },
  },
};
