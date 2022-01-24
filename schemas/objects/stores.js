export default {
  type: "object",
  name: "stores",
  title: "Stores",
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (Math.abs(fields.columns.length % 2) == 1 && fields.columns.disabled)
        return "Must have a even amount of columns";
      return true;
    }),
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