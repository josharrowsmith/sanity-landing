export default {
  type: "object",
  name: "imageGrid",
  title: "Grid",
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (Math.abs(fields.columns.length % 2) == 1 || !fields.columns.length > 0)
        return "Must have a even amount of columns";
      return true;
    }),
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
