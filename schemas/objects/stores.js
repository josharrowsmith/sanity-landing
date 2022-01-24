export default {
  type: "object",
  name: "stores",
  title: "Stores",
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
        title: `Stores Block`,
      };
    },
  },
};