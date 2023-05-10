/** @format */

import { useQueryAllPets } from "pet/hooks/useQueryAllPets";
import { useQueryAvailablePets } from "pet/hooks/useQueryAvailablePets";

export const Counter = () => {
	const { loading, error, data } = useQueryAvailablePets();
	const { pets } = useQueryAllPets();

	if (loading) {
		return <p>Loading</p>;
	}

	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<>
			<div>{data?.availablePets}</div>
			{pets.map(({ name, weight, id }) => (
				<>
					<li>id : {id}</li>
					<li>name : {name}</li>
					<li>weight : {weight}</li>
				</>
			))}
		</>
	);
};
