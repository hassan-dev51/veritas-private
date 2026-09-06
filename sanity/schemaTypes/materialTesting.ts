import { defineField, defineType } from "sanity";

export const materialTesting = defineType({
  name: "materialTesting",
  title: "Material Testing",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "services",
      title: "Material Testing Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "shortDescription",
              title: "Short Description",
              type: "text",
              rows: 3,
            }),

            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: "title",
              description: "shortDescription",
            },
          },
        },
      ],
    }),

    defineField({
      name: "standards",
      title: "Standards & Specifications",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),

    defineField({
      name: "process",
      title: "Testing Process",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "step",
              title: "Step Number",
              type: "number",
            }),

            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
    }),

    defineField({
      name: "markets",
      title: "International Markets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Market Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "qualityContent",
      title: "Quality & Reliability",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "answer",
              title: "Answer",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: "question",
            },
          },
        },
      ],
    }),

    defineField({
      name: "cta",
      title: "Call To Action",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 4,
        }),

        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
        }),

        defineField({
          name: "buttonLink",
          title: "Button Link",
          type: "string",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "heroHeading",
    },
  },
});
