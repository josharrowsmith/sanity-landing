export default {
  type: 'object',
  name: 'heroBanner',
  title: 'Hero Banner',
  fields: [
    {
      name: 'backgroundImage',
      type: 'blockImage'
    },
    {
      name: 'backgroundImageMobile',
      type: 'blockImage'
    },
    {
      type: 'boolean',
      name: 'disabled'
    }
  ],
  preview: {
    select: {
      title: 'Hero Banner',
      imageUrl: 'backgroundImage.blockImage.asset.url'
    },
    prepare: ({ title = 'Please Select An Image', imageUrl }) => ({
      title,
      media: imageUrl ? (
        <img style={{ objectFit: 'cover', objectPosition: 'right' }} src={imageUrl} alt={"Hero Image"} />
      ) : undefined,
      subtitle: 'Banner Image'
    }),
  },
}
