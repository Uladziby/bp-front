/** @format */
import { useState } from "react";
import { StyledAButton, StyledContainer, StyledContent } from "./PortfolioCard.style";

interface PortfolioCardProps {
	imageBefore: string;
	imageAfter: string;
	width: number;
	height: number;
}

export const PortfolioCard = ({ imageBefore, imageAfter, width, height }: PortfolioCardProps) => {
	const [image, toggleImage] = useState<boolean>(true);

	const onToggleImage = () => {
		toggleImage(!image);
	};

	return (
		<StyledContainer $width={width} $height={height}>
			<StyledContent style={{ backgroundImage: `url(${image ? imageBefore : imageAfter})` }}>
				<StyledAButton variant="secondary" size="medium" onClick={onToggleImage} isWithMotion>
					Показать фото {image ? "до" : "после"}
				</StyledAButton>
			</StyledContent>
		</StyledContainer>
	);
};
