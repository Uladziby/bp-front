/** @format */

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";

//const uri = "https://funded-pet-library.moonhighway.com/";
const uri = "http://localhost:4000/graphql";

const link = createHttpLink({ uri });

export const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});
