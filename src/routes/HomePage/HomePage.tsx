/** @format */
import { AboutMe } from "routes/HomePage/Parts/AboutMe/AboutMe";
import { MyServices } from "./Parts/MyServices/MyServices";
import { Portfolio } from "./Parts/Portfolio/Portfolio";
import { ContactForm } from "./Parts/ContactForm/ContactForm";
import { Testimonials } from "./Parts/Testimonials/Testimonials";

export const HomePage = () => {
	return (
		<>
			<AboutMe />
			<MyServices />
			<Portfolio />
			<ContactForm />
			<Testimonials />
		</>
	);
};
