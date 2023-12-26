/** @format */

import classes from "./MyServices.module.css";
import { CardsContainer, StyledAMotionSection } from "./MyServices.style";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import { IServiceCard } from "./type";
import { MY_SERVICES, SERVICES_TAG } from "utils/constatns";
import { useMemo } from "react";
import { textVariant } from "utils/motion";
import { services } from "./constants";

export const MyServices = () => {
	const serviceCards: IServiceCard[] = useMemo(() => [...services], []);

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
