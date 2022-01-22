export default {
    type: 'object',
    name: 'hero',
    title: 'Hero',
    fields: [
      {
        name: 'label',
        type: 'string'
      },
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        title: 'Desktop Hero Image',
        name: 'desktopImage',
        type: 'image'
      },
      {
        title: 'Mobile Hero Image',
        name: 'mobileImage',
        type: 'image'
      },

    ],
    preview: {
      select: {
        title: 'heading',
        subtitle: 'label',
        disabled: 'disabled'
      },
      prepare({ title, disabled }) {
        return {
          title: `Hero: ${disabled ? 'DISABLED' : title}`
        }
      }
    }
  }
  