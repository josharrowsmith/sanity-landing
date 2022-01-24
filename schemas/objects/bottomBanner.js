export default {
  type: 'object',
  name: 'bottomBanner',
  title: 'Bottom Banner',
  fields: [
    {
      name: 'desktopImage',
      type: 'blockImage'
    },
    {
      name: 'mobileImage',
      type: 'blockImage'
    },
    {
      type: 'boolean',
      name: 'disabled'
    }
  ],
  preview: {
    select: {
      title: 'Bottom Banner',
      imageUrl: 'mobileImage.blockImage.image.asset.url'
    },
    prepare: ({ title = 'Please Select An Image', imageUrl }) => ({
      title,
      media: imageUrl ? (
        <img style={{ objectFit: 'cover', objectPosition: 'right' }} src={imageUrl} alt={"Bottom Banner Image"} />
      ) : undefined,
      subtitle: 'Bottom Banner Image'
    }),
  },
}
