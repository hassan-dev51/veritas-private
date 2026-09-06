// src/lib/sanity/getMaterialTesting.ts

import { sanityClient } from "./client";  
import { materialTestingQuery } from "./queries"; 
import type { MaterialTesting } from "./types";

export async function getMaterialTesting(
  slug: string,
): Promise<MaterialTesting | null> {
  try {
    const data = await sanityClient.fetch<MaterialTesting | null>(
      materialTestingQuery,
      { slug },
      {
        next: {
          revalidate: 3600,
          tags: [`material-testing:${slug}`],
        },
      },
    );

    return data;
  } catch (error) {
    console.error(`Failed to fetch material testing: ${slug}`, error);

    throw new Error("Unable to load testing information.");
  }
}
