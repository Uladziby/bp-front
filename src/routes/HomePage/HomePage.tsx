/** @format */
import { AboutMe } from "routes/HomePage/Parts/AboutMe/AboutMe";
import { MyServices } from "./Parts/MyServices/MyServices";
import { Portfolio } from "./Parts/Portfolio/Portfolio";
import { ContactForm } from "./Parts/ContactForm/ContactForm";
import { Testimonials } from "./Parts/Testimonials/Testimonials";
import { StyledTitle } from "./HomePage.style";
import { Introducing } from "./Parts/Introducing/Introducing";

export const HomePage = () => {
	return (
		<>
			<Introducing />
			<AboutMe />
			<MyServices />
			<Portfolio />
			<ContactForm />
			<Testimonials />
		</>
	);
};
