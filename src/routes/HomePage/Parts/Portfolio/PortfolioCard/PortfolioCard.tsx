/** @format */
import { useState } from "react";
import { StyledAButton, StyledContainer, StyledContent } from "./PortfolioCard.style";

interface PortfolioCardProps {
	imageBefore: string;
	imageAfter: string;
}

export const PortfolioCard = ({ imageBefore, imageAfter }: PortfolioCardProps) => {
	const [image, toggleImage] = useState(false);

	return (
		<StyledContainer>
			<StyledContent style={{ backgroundImage: `url(${image ? imageBefore : imageAfter})` }}>
				<StyledAButton
					variant="secondary"
					size="small"
					onClick={() => toggleImage(!image)}
					isWithMotion
				>
					{image ? "До" : "После"}
				</StyledAButton>
			</StyledContent>
		</StyledContainer>
	);
};
