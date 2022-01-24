export default {
  type: "object",
  name: "stores",
  title: "Stores",
  validation: (Rule) =>
    Rule.custom((fields) => {
      console.log(fields.columns);
      if (
        Math.abs(fields.columns.length % 2) == 1 &&
        fields.columns.every((v) => v.disabled === false)
      )
        return "One columns must be disbaled on mobile";
      return true;
    }).warning(),
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
