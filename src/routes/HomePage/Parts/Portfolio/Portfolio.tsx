/** @format */
import { PORTFOLIO_TAG, PORTFOLIO_TITLE } from "utils/constatns";
import { useMemo } from "react";
import bg from "assets/about_me_photo.jpg";
import portfolio_front from "assets/portfolio_front.jpg";
import portfolio_back from "assets/protfolio_back.jpg";
import { PortfolioCard } from "./PortfolioCard/PortfolioCard";
import { IPortfolioCard } from "./type";
import { ASlider } from "components/ASlider/ASlider";
import { AMotionSection } from "components/AMotionSection/AMotionSection";

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
			{
				imageBefore: portfolio_front,
				imageAfter: portfolio_back,
			},
		],
		[]
	);

	return (
		<AMotionSection title={PORTFOLIO_TITLE} id={PORTFOLIO_TAG}>
			<ASlider>
				{portfolioCard.map(({ imageBefore, imageAfter }, idx) => (
					<PortfolioCard key={idx} imageBefore={imageBefore} imageAfter={imageAfter} />
				))}
			</ASlider>
		</AMotionSection>
	);
};
