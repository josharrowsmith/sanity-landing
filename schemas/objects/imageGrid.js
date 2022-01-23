export default {
  type: "object",
  name: "imageGrid",
  title: "Image Grid",
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (Math.abs(fields.columns.length % 2) == 1)
        return "Must have a even amount of columns";
      return true;
    }),
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
        title: `Image Grid`,
      };
    },
  },
};
