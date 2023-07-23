/** @format */

import { useMutation } from "@apollo/react-hooks";

import { loader } from "graphql.macro";

const mutationLogin = loader("./gql/mutationLogin.graphql");

export const useMutationLogin = () => {
	const [login, { data, error }] = useMutation(mutationLogin);

	return { error, login };
};
