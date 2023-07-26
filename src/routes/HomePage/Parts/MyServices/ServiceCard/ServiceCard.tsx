/** @format */
import { StyledBackground } from "../MyServices.style";
import { ServiceCardProps } from "../type";
import {
	StyledATitle,
	StyledCard,
	StyledCardContent,
	StyledList,
	StyledListItem,
} from "./ServiceCard.style";

export const ServiceCard = ({
	backgroundImage,
	context,
	title,
	width,
	height,
	description,
}: ServiceCardProps) => {
	return (
		<StyledCard className="card" width={width} heigth={height}>
			<StyledBackground background={backgroundImage} className="card__background" />
			<StyledCardContent $heightContent={width} className="card__content">
				<StyledATitle size={18} weight={400} lineHeight={36} isBlur={true}>
					{title}
				</StyledATitle>
				<StyledList>
					{description?.map((item, idx) => (
						<StyledListItem key={idx}>{item}</StyledListItem>
					))}
				</StyledList>
				<StyledATitle size={16} weight={400} lineHeight={36} isBlur={true}>
					{context}
				</StyledATitle>
			</StyledCardContent>
		</StyledCard>
	);
};
