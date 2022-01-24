export default {
  type: "document",
  name: "page",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      description: "Add, edit, and reorder sections",
      of: [
        { type: "hero", title: "Hero Image" },
        { type: "heroBanner", title: "Hero Banner" },
        { type: "imageGrid", title: "Image Block" },
        { type: "socials", title: "Socials Block" },
        { type: "stores", title: "Stores Block" }
      ],
    },
  ],
};
