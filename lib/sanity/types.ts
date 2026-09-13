// src/lib/sanity/types.ts

// ============================================================
// SANITY IMAGE
// ============================================================

export interface SanityImage {
  asset?: {
    _id: string;
    url: string;
  };
  alt?: string;
}

// ============================================================
// TESTING SERVICE PAGE
// ============================================================

export interface MaterialTesting {
  _id: string;

  title: string;

  slug: {
    current: string;
  };

  // ------------------------------------------------------------
  // Hero
  // ------------------------------------------------------------

  heroHeading?: string;

  heroDescription?: string;

  heroImage?: SanityImage;

  // ------------------------------------------------------------
  // Introduction
  // ------------------------------------------------------------

  introduction?: PortableTextBlock[];

  introductionImage?: SanityImage;

  // ------------------------------------------------------------
  // Services
  // ------------------------------------------------------------

  services?: MaterialTestingService[];

  // ------------------------------------------------------------
  // Standards
  // ------------------------------------------------------------

  standards?: string[];

  standardsImage?: SanityImage;

  // ------------------------------------------------------------
  // Testing Process
  // ------------------------------------------------------------

  process?: MaterialTestingProcess[];

  processImage?: SanityImage;

  // ------------------------------------------------------------
  // International Markets
  // ------------------------------------------------------------

  markets?: MaterialTestingMarket[];

  marketsImage?: SanityImage;

  // ------------------------------------------------------------
  // Quality
  // ------------------------------------------------------------

  qualityContent?: PortableTextBlock[];

  qualityImage?: SanityImage;

  // ------------------------------------------------------------
  // FAQs
  // ------------------------------------------------------------

  faqs?: MaterialTestingFaq[];

  // ------------------------------------------------------------
  // CTA
  // ------------------------------------------------------------

  cta?: MaterialTestingCTA;

  // ------------------------------------------------------------
  // SEO
  // ------------------------------------------------------------

  seo?: SEOData;
}

// ============================================================
// TESTING SERVICE
// ============================================================

export interface MaterialTestingService {
  title?: string;

  shortDescription?: string;

  content?: PortableTextBlock[];

  image?: SanityImage;
}

// ============================================================
// TESTING PROCESS
// ============================================================

export interface MaterialTestingProcess {
  step?: number;

  title?: string;

  description?: string;
}

// ============================================================
// INTERNATIONAL MARKET
// ============================================================

export interface MaterialTestingMarket {
  name?: string;

  description?: string;
}

// ============================================================
// FAQ
// ============================================================

export interface MaterialTestingFaq {
  question?: string;

  answer?: PortableTextBlock[];
}

// ============================================================
// CTA
// ============================================================

export interface MaterialTestingCTA {
  heading?: string;

  description?: string;

  buttonText?: string;

  buttonLink?: string;

  image?: SanityImage;
}

// ============================================================
// SEO
// ============================================================

export interface SEOData {
  metaTitle?: string;

  metaDescription?: string;

  keywords?: string[];

  ogImage?: SanityImage;

  canonicalUrl?: string;

  noIndex?: boolean;
}

// ============================================================
// PORTABLE TEXT
// ============================================================

export interface PortableTextBlock {
  _type: string;

  _key?: string;

  children?: unknown[];

  markDefs?: unknown[];

  style?: string;
}

// ============================================================
// TESTING SERVICE SUMMARY
// Used on /testing listing page and other service listings
// ============================================================

export interface TestingServiceSummary {
  _id: string;

  title: string;

  slug: {
    current: string;
  };

  heroHeading?: string;

  heroDescription?: string;
}
