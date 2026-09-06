// src/lib/sanity/queries.ts

import { groq } from "next-sanity";

export const materialTestingQuery = groq`
  *[
    _type == "materialTesting" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    slug,

    heroHeading,
    heroDescription,

    introduction,

    services[]{
      title,
      shortDescription,
      content
    },

    standards[],

    process[]{
      step,
      title,
      description
    },

    markets[]{
      name,
      description
    },

    qualityContent,

    faqs[]{
      question,
      answer
    },

    cta{
      heading,
      description,
      buttonText,
      buttonLink
    },

    seo{
      metaTitle,
      metaDescription,
      keywords,
      ogImage{
        asset->{
          _id,
          url
        },
        alt
      },
      canonicalUrl,
      noIndex
    }
  }
`;
export const allTestingServicesQuery = groq`
  *[
    _type == "materialTesting" &&
    defined(slug.current)
  ]
  | order(title asc)
  {
    _id,
    title,
    slug,
    heroHeading,
    heroDescription
  }
`;