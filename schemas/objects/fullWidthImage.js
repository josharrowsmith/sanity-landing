export default {
  type: 'object',
  name: 'fullWidthImage',
  title: 'Full Width Image',
  fields: [
    {
      name: 'backgroundImage',
      type: 'mainImage'
    },
    {
      name: 'backgroundImageMobile',
      type: 'mainImage'
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Full Width Image`
      }
    }
  }
}
