/** @format */
import classes from "./MyServices.module.css";
import { CardsContainer, StyledASection } from "./MyServices.style";
import ServiceCard from "./ServiceCard";
import bg from "../../../../assets/about_me_photo.jpg";
import { IServiceCard } from "./type";
import { MY_SERVICES } from "utils/constatns";
import { useMemo } from "react";

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
		<StyledASection title={MY_SERVICES}>
			<CardsContainer className={classes.card_grid} width={300}>
				{serviceCards.map(({ title, subtitle, backgroundImage, context }) => (
					<ServiceCard
						width={300}
						title={title}
						subtitle={subtitle}
						backgroundImage={backgroundImage}
						context={context}
					/>
				))}
			</CardsContainer>
		</StyledASection>
	);
};
