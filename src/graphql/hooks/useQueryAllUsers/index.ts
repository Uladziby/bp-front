/** @format */

import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { IUser } from "./type";

const queryAllUsers = loader("./queryAllUsers.graphql");

export const useAllUsers = () => {
	const { data, error } = useQuery(queryAllUsers);
	const users: IUser[] = data ? data.allUsers : null;

	return { users, error };
};
