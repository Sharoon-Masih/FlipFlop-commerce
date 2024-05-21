import { createClient, } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import {type QueryParams} from "@sanity/client"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams as QueryParams, {
    cache: "force-cache",
    next: { tags },
  });
}