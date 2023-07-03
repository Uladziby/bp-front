/** @format */
import classes from "./MyServices.module.css";
import { CardsContainer, StyledAMotionSection } from "./MyServices.style";
import ServiceCard from "./ServiceCard/ServiceCard";
import bg from "../../../../assets/katrix_2.jpg";
import { IServiceCard } from "./type";
import { MY_SERVICES, SERVICES_TAG } from "utils/constatns";
import { useMemo } from "react";
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { textVariant } from "utils/motion";

export const MyServices = () => {
	const serviceCards: IServiceCard[] = useMemo(
		() => [
			{
				backgroundImage: bg,
				title: "Типирование + LookBook ",
				context: "85 $/215 BYN",
			},
			{
				backgroundImage: bg,
				title: "Типирование + Оформление портретной зоны",
				context: "85 $/215 BYN",
			},
			{
				backgroundImage: bg,
				title: "Определение колорита внешности",
				context: "85 $/215 BYN",
			},
		],
		[]
	);

	return (
		<StyledAMotionSection title={MY_SERVICES} id={SERVICES_TAG}>
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
		</StyledAMotionSection>
	);
};
