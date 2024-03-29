/** @format */

import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

const uri = "https://funded-pet-library.moonhighway.com/";

export const client = new ApolloClient({
	uri,
	cache: new InMemoryCache(),
});
