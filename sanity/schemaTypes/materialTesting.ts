import { defineField, defineType } from "sanity";

export const materialTesting = defineType({
  name: "materialTesting",
  title: "Testing Service Page",
  type: "document",

  fields: [
    // ============================================================
    // BASIC INFORMATION
    // ============================================================

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

    // ============================================================
    // HERO
    // ============================================================

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
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // ============================================================
    // INTRODUCTION
    // ============================================================

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
      name: "introductionImage",
      title: "Introduction Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    // ============================================================
    // SERVICES
    // ============================================================

    defineField({
      name: "services",
      title: "Testing Services",
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

            defineField({
              name: "image",
              title: "Service Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alternative Text",
                  type: "string",
                }),
              ],
            }),
          ],

          preview: {
            select: {
              title: "title",
              description: "shortDescription",
              media: "image",
            },
            prepare({ title, description, media }) {
              return {
                title,
                subtitle: description,
                media,
              };
            },
          },
        },
      ],
    }),

    // ============================================================
    // STANDARDS
    // ============================================================

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
      name: "standardsImage",
      title: "Standards Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    // ============================================================
    // TESTING PROCESS
    // ============================================================

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
      name: "processImage",
      title: "Testing Process Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    // ============================================================
    // INTERNATIONAL MARKETS
    // ============================================================

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

          preview: {
            select: {
              title: "name",
              subtitle: "description",
            },
          },
        },
      ],
    }),

    defineField({
      name: "marketsImage",
      title: "Markets Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    // ============================================================
    // QUALITY & RELIABILITY
    // ============================================================

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
      name: "qualityImage",
      title: "Quality & Reliability Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),

    // ============================================================
    // FAQS
    // ============================================================

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

    // ============================================================
    // CALL TO ACTION
    // ============================================================

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

        defineField({
          name: "image",
          title: "CTA Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    // ============================================================
    // SEO
    // ============================================================

    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        }),

        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(160),
        }),

        defineField({
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        }),

        defineField({
          name: "ogImage",
          title: "Open Graph Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
            }),
          ],
        }),

        defineField({
          name: "canonicalUrl",
          title: "Canonical URL",
          type: "url",
        }),

        defineField({
          name: "noIndex",
          title: "No Index",
          type: "boolean",
          initialValue: false,
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "heroHeading",
      media: "heroImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
