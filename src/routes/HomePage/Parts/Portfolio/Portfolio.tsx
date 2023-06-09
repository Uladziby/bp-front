/** @format */

import { ASection } from "components/ASection/ASection";
import { PORTFOLIO_TITLE } from "utils/constatns";
import { StyledCardsContainer, StyledContent, StyledSlider } from "./Portfolio.style";
import { useMemo } from "react";
import bg from "../../../../assets/about_me_photo.jpg";
import portfolio_front from "../../../../assets/portfolio_front.jpg";
import portfolio_back from "../../../../assets/protfolio_back.jpg";
import { PortfolioCard } from "./PortfolioCard/PortfolioCard";
import { IPortfolioCard } from "./type";

export const Portfolio = () => {
	const portfolioCard: IPortfolioCard[] = useMemo(
		() => [
			{
				imageBefore: portfolio_front,
				imageAfter: portfolio_back,
			},
			{
				imageBefore: bg,
				imageAfter: portfolio_front,
			},
			{
				imageBefore: portfolio_front,
				imageAfter: portfolio_back,
			},
			{
				imageBefore: portfolio_front,
				imageAfter: portfolio_back,
			},
		],
		[]
	);

	return (
		<ASection title={PORTFOLIO_TITLE}>
			<StyledCardsContainer>
				<StyledContent>
					<StyledSlider>
						{portfolioCard.map(({ imageBefore, imageAfter }, idx) => (
							<PortfolioCard key={idx} imageBefore={imageBefore} imageAfter={imageAfter} />
						))}
					</StyledSlider>
				</StyledContent>
			</StyledCardsContainer>
		</ASection>
	);
};
