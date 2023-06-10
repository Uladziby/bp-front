/** @format */
import { Counter } from "routes/counter";
import { StyledContainer } from "./HomePage.style";
import background from "../../assets/main_bg.jpg";
import { AboutMe } from "routes/HomePage/Parts/AboutMe/AboutMe";
import { MyServices } from "./Parts/MyServices/MyServices";
import { Portfolio } from "./Parts/Portfolio/Portfolio";

export const HomePage = () => {
	return (
		<>
			<StyledContainer style={{ backgroundImage: `url(${background})` }}></StyledContainer>
			<AboutMe />
			<MyServices />
			<Portfolio />
			<Counter />
		</>
	);
};
