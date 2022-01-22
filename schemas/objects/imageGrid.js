export default {
  type: 'object',
  name: 'imageGrid',
  title: 'Image Grid',
  fields: [
    {
      type: 'array',
      name: 'columns',
      of: [{ type: 'mainImage' }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Image Grid`
      }
    }
  }
}
