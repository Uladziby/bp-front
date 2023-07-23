/** @format */

import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllPets = loader("./queryAllPets.graphql");

export interface IPets {
	id: string;
	name: string;
	weight: string;
}

export const useQueryAllPets = () => {
	const { loading, error, data } = useQuery(queryAllPets);
	const pets: IPets[] = data ? data.allPets : null;
	console.log("pets", data);
	return { loading, error, pets };
};
