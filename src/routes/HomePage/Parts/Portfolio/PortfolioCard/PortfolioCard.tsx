/** @format */
import { useState } from "react";
import { StyledAButton, StyledContainer, StyledContent } from "./PortfolioCard.style";

interface PortfolioCardProps {
	imageBefore: string;
	imageAfter: string;
	width: number;
}

export const PortfolioCard = ({ imageBefore, imageAfter, width }: PortfolioCardProps) => {
	const [image, toggleImage] = useState<boolean>(false);

	const onToggleImage = () => {
		toggleImage(!image);
	};

	return (
		<StyledContainer $width={width}>
			<StyledContent style={{ backgroundImage: `url(${image ? imageBefore : imageAfter})` }}>
				<StyledAButton variant="secondary" size="small" onClick={onToggleImage} isWithMotion>
					{image ? "До" : "После"}
				</StyledAButton>
			</StyledContent>
		</StyledContainer>
	);
};
