export default {
  type: "object",
  name: "socials",
  title: "Socials",
  fields: [
    {
      type: "array",
      name: "columns",
      of: [{ type: "ctaPlug" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Socials Block`,
      };
    },
  },
};