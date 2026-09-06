// src/lib/sanity/types.ts

export interface MaterialTesting {
  _id: string;

  title: string;

  slug: {
    current: string;
  };

  heroHeading?: string;

  heroDescription?: string;

  introduction?: PortableTextBlock[];

  services?: MaterialTestingService[];

  standards?: string[];

  process?: MaterialTestingProcess[];

  markets?: MaterialTestingMarket[];

  qualityContent?: PortableTextBlock[];

  faqs?: MaterialTestingFaq[];

  cta?: MaterialTestingCTA;

  seo?: SEOData;
}

export interface MaterialTestingService {
  title?: string;
  shortDescription?: string;
  content?: PortableTextBlock[];
}

export interface MaterialTestingProcess {
  step?: string;
  title?: string;
  description?: string;
}

export interface MaterialTestingMarket {
  name?: string;
  description?: string;
}

export interface MaterialTestingFaq {
  question?: string;
  answer?: PortableTextBlock[];
}

export interface MaterialTestingCTA {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface PortableTextBlock {
  _type: string;
  _key?: string;
  children?: unknown[];
  markDefs?: unknown[];
  style?: string;
}
export interface TestingServiceSummary {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  heroHeading?: string;
  heroDescription?: string;
}