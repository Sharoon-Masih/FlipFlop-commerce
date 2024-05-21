import { createClient, } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import {type QueryParams} from "@sanity/client"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


export async function sanityFetch<QueryResponse>({  //acha basically yaha par humna yeh function iss lia bnaya hai takay manually client.fetch() kay func ma jakay iss tarah say sari cheezain add na krni paray toh iss lia simply jo client.fetch() ka method hai wo humna within sanityFetch() func ma use kia hai taka direct sanityFetch() ko call krein or usme required parameter pass krdein.
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