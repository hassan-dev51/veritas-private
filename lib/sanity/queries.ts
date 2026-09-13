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

    heroImage{
      asset->{
        _id,
        url
      },
      alt
    },

    introduction,
    introductionImage{
      asset->{
        _id,
        url
      },
      alt
    },

    services[]{
      title,
      shortDescription,
      content,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
    },

    standards,
    standardsImage{
      asset->{
        _id,
        url
      },
      alt
    },

    process[]{
      step,
      title,
      description
    },

    processImage{
      asset->{
        _id,
        url
      },
      alt
    },

    markets[]{
      name,
      description
    },

    marketsImage{
      asset->{
        _id,
        url
      },
      alt
    },

    qualityContent,

    qualityImage{
      asset->{
        _id,
        url
      },
      alt
    },

    faqs[]{
      question,
      answer
    },

    cta{
      heading,
      description,
      buttonText,
      buttonLink,
      image{
        asset->{
          _id,
          url
        },
        alt
      }
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
