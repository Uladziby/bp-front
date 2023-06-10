/** @format */
import { ATitle } from "components/ATitle/ATitle";
import { StyledBackground, StyledCard, StyledCardContent } from "./MyServices.style";
import { ServiceCardProps } from "./type";
import * as HoverCard from "@radix-ui/react-hover-card";
import { StyledHoverCard } from "./ServiceCard.style";

const ServiceCard = ({
	backgroundImage,
	context,
	title,
	subtitle,
	width,
	height,
}: ServiceCardProps) => {
	return (
		<HoverCard.Root>
			<HoverCard.Trigger asChild>
				<StyledCard className="card" width={width} heigth={height}>
					<StyledBackground background={backgroundImage} className="card__background" />
					<StyledCardContent>
						<ATitle size={8} weight={400} lineHeight={24}>
							{subtitle}
						</ATitle>
						<ATitle size={18} weight={400} lineHeight={1.4}>
							{title}
						</ATitle>
						<ATitle size={24} weight={400} lineHeight={36}>
							{context}
						</ATitle>
					</StyledCardContent>
				</StyledCard>
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<StyledHoverCard>
					<div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
						<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
							<div>
								<div className="Text bold">Radix</div>
								<div className="Text faded">@radix_ui</div>
							</div>
							<div className="Text">
								Components, icons, colors, and templates for building high-quality, accessible UI.
								Free and open-source.
							</div>
							<div style={{ display: "flex", gap: 15 }}>
								<div style={{ display: "flex", gap: 5 }}>
									<div className="Text bold">0</div> <div className="Text faded">Following</div>
								</div>
								<div style={{ display: "flex", gap: 5 }}>
									<div className="Text bold">2,900</div> <div className="Text faded">Followers</div>
								</div>
							</div>
						</div>
					</div>

					<HoverCard.Arrow className="HoverCardArrow" />
				</StyledHoverCard>
			</HoverCard.Portal>
		</HoverCard.Root>
	);
};

export default ServiceCard;
