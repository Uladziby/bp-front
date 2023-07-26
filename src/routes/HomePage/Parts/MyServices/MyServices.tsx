/** @format */

import classes from "./MyServices.module.css";
import { CardsContainer, StyledAMotionSection } from "./MyServices.style";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import bg from "assets/bg_services.jpg";
import { IServiceCard } from "./type";
import {
	MY_SERVICES,
	SERVICES_TAG,
	SERVICE_LOOKBOOK,
	SERVICE_PORTRAIT,
	SERVICE_WARDROBE,
} from "utils/constatns";
import { useMemo } from "react";
import { textVariant } from "utils/motion";

export const MyServices = () => {
	const serviceCards: IServiceCard[] = useMemo(
		() => [
			{
				backgroundImage: bg,
				title: "Типирование + LookBook ",
				description: SERVICE_LOOKBOOK,
				context: "85 $ / 350 PLN",
			},
			{
				backgroundImage: bg,
				title: "Типирование + Оформление портретной зоны",
				description: SERVICE_PORTRAIT,
				context: "65 $ / 260 PLN",
			},
			{
				backgroundImage: bg,
				title: "Доп. услуга : Разбор гардероба",
				description: SERVICE_WARDROBE,
				context: "45$ / 180 PLN",
			},
		],
		[]
	);

	return (
		<StyledAMotionSection title={MY_SERVICES} id={SERVICES_TAG}>
			<CardsContainer className={classes.card_grid} width={300} variants={textVariant()}>
				{serviceCards.map(({ title, subtitle, backgroundImage, context, description }) => (
					<ServiceCard
						key={title}
						width={300}
						title={title}
						description={description}
						subtitle={subtitle}
						backgroundImage={backgroundImage}
						context={context}
					/>
				))}
			</CardsContainer>
		</StyledAMotionSection>
	);
};
