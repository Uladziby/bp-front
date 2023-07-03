/** @format */
import { StyledBackground } from "../MyServices.style";
import { ServiceCardProps } from "../type";
import * as HoverCard from "@radix-ui/react-hover-card";
import { HoverServiceCard } from "../HoverServiceCard/HoverServiceCard";
import { StyledATitle, StyledCard, StyledCardContent } from "./ServiceCard.style";

const ServiceCard = ({
	backgroundImage,
	context,
	title,
	subtitle,
	width,
	height,
}: ServiceCardProps) => {
	return (
		/* 	<HoverCard.Root>
			<HoverCard.Trigger asChild>
				
			</HoverCard.Trigger>

			<HoverCard.Portal>
				<HoverServiceCard />
			</HoverCard.Portal>
		</HoverCard.Root> */

		<StyledCard className="card" width={width} heigth={height}>
			<StyledBackground background={backgroundImage} className="card__background" />
			<StyledCardContent $heightContent={width} className="card__content">
				<StyledATitle size={20} weight={400} lineHeight={36} isBlur={true}>
					{title}
				</StyledATitle>
				<StyledATitle size={18} weight={400} lineHeight={36} isBlur={true}>
					Price :<br />
					{context}
				</StyledATitle>
			</StyledCardContent>
		</StyledCard>
	);
};

export default ServiceCard;
