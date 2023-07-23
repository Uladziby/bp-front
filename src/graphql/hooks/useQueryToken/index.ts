/** @format */

import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { ILoginForm } from "routes/AuthPage/Parts/LoginForm/type";

const queryAllUsers = loader("./queryToken.graphql");

export const useQueryToken = () => {
	const [getProfile, { data, error }] = useLazyQuery(queryAllUsers);

	const user = data ? data.user : null;

	return { getProfile, user, error };
};
