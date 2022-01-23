export default {
    type: "object",
    name: "stores",
    title: "Stores",
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
          title: `Stores Grid`,
        };
      },
    },
  };
  