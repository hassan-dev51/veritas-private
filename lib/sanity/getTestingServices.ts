import { sanityClient } from "./client";
import { allTestingServicesQuery } from "./queries";
import type { TestingServiceSummary } from "./types";

export async function getTestingServices(): Promise<TestingServiceSummary[]> {
  try {
    const data = await sanityClient.fetch<TestingServiceSummary[]>(
      allTestingServicesQuery,
      {},
      {
        next: {
          revalidate: 3600,
          tags: ["testing-services"],
        },
      },
    );

    return data ?? [];
  } catch (error) {
    console.error("Failed to fetch testing services:", error);

    return [];
  }
}
