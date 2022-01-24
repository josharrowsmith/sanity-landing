import react from 'react'

export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      title: 'Desktop Hero Image',
      name: 'desktopImage',
      type: 'blockImage'
    },
    {
      title: 'Mobile Hero Image',
      name: 'mobileImage',
      type: 'blockImage'
    },

  ],
  preview: {
    select: {
      title: 'Hero',
      imageUrl: 'mobileImage.blockImage.asset.url'
    },
    prepare: ({ title = 'Please Select An Image', imageUrl }) => ({
      title,
      media: imageUrl ? (
        <img style={{ objectFit: 'cover', objectPosition: 'right' }} src={imageUrl} alt="Hero" />
      ) : undefined,
      subtitle: 'Hero Image'
    }),
  },
}
