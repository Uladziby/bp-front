/** @format */
import { Counter } from "routes/counter";
import { StyledContainer } from "./HomePage.style";
import background from "../../assets/main_bg.jpg";

export const HomePage = () => {
	return (
		<>
			<StyledContainer style={{ backgroundImage: `url(${background})` }}></StyledContainer>
			<Counter />
		</>
	);
};
