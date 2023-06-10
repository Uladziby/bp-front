/** @format */
import classes from "./MyServices.module.css";
import { CardsContainer } from "./MyServices.style";
import ServiceCard from "./ServiceCard";
import bg from "../../../../assets/about_me_photo.jpg";
import { IServiceCard } from "./type";
import { MY_SERVICES } from "utils/constatns";
import { useMemo } from "react";
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { textVariant } from "utils/motion";

export const MyServices = () => {
	const serviceCards: IServiceCard[] = useMemo(
		() => [
			{
				backgroundImage: bg,
				title: "Title 1",
				subtitle: "services",
				context:
					"Аудирование для многих, пожалуй, самый сложный навык. Понять иностранную речь бывает",
			},
			{
				backgroundImage: bg,
				title: "Title 2",
				subtitle: "services",
				context:
					"Аудирование для многих, пожалуй, самый сложный навык. Понять иностранную речь бывает",
			},
			{
				backgroundImage: bg,
				title: "Title 3",
				subtitle: "services",
				context:
					"Аудирование для многих, пожалуй, самый сложный навык. Понять иностранную речь бывает",
			},
		],
		[]
	);

	return (
		<AMotionSection title={MY_SERVICES}>
			<CardsContainer className={classes.card_grid} width={300} variants={textVariant()}>
				{serviceCards.map(({ title, subtitle, backgroundImage, context }) => (
					<ServiceCard
						key={title}
						width={300}
						title={title}
						subtitle={subtitle}
						backgroundImage={backgroundImage}
						context={context}
					/>
				))}
			</CardsContainer>
		</AMotionSection>
	);
};
