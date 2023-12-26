/** @format */
import { PORTFOLIO_TAG, PORTFOLIO_TITLE } from "utils/constatns";
import { useMemo } from "react";
import { PortfolioCard } from "./PortfolioCard/PortfolioCard";
import { IPortfolioCard } from "./type";
import { ASlider } from "components/ASlider/ASlider";
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { portfolioCases } from "./constants";

const widthItem = 350;
const heightItem = 350;

export const Portfolio = () => {
	const portfolioCard: IPortfolioCard[] = useMemo(() => [...portfolioCases], []);

	return (
		<AMotionSection title={PORTFOLIO_TITLE} id={PORTFOLIO_TAG}>
			<ASlider heightItem={heightItem} widthItem={widthItem}>
				{portfolioCard.map(({ imageBefore, imageAfter }, idx) => (
					<PortfolioCard
						key={idx}
						imageBefore={imageBefore}
						imageAfter={imageAfter}
						width={widthItem}
						height={heightItem}
					/>
				))}
			</ASlider>
		</AMotionSection>
	);
};
