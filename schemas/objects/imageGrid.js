export default {
  type: "object",
  name: "imageGrid",
  title: "Grid",
  fields: [
    {
      type: "array",
      name: "columns",
      of: [{ type: "ctaPlug" }],
    },
    {
      type: 'boolean',
      name: 'disabled'
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Image Block`,
      };
    },
  },
};
