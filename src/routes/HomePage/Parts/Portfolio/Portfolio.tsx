/** @format */
import { PORTFOLIO_TAG, PORTFOLIO_TITLE } from "utils/constatns";
import { useMemo } from "react";
import example_one_before from "assets/images/examples/after_1.jpg";
import example_two_after from "assets/images/examples/before_1.jpg";
import example_2_before from "assets/images/examples/after_2.jpg";
import example_2_after from "assets/images/examples/before_2.jpg";
import example_3_before from "assets/images/examples/after_3.jpg";
import example_3_after from "assets/images/examples/before_3.jpg";
import example_4_before from "assets/images/examples/after_4.jpg";
import example_4_after from "assets/images/examples/before_4.jpg";

import { PortfolioCard } from "./PortfolioCard/PortfolioCard";
import { IPortfolioCard } from "./type";
import { ASlider } from "components/ASlider/ASlider";
import { AMotionSection } from "components/AMotionSection/AMotionSection";

const widthItem = 350;
const heightItem = 350;

export const Portfolio = () => {
	const portfolioCard: IPortfolioCard[] = useMemo(
		() => [
			/* 	{
				imageBefore: example_one_before,
				imageAfter: example_two_after,
			}, */
			{
				imageBefore: example_2_before,
				imageAfter: example_2_after,
			},
			{
				imageBefore: example_3_before,
				imageAfter: example_3_after,
			},
			/* 	{
				imageBefore: example_4_before,
				imageAfter: example_4_after,
			}, */
		],
		[]
	);

	return (
		<AMotionSection title={PORTFOLIO_TITLE} id={PORTFOLIO_TAG}>
			<ASlider heightItem={heightItem} widthItem={widthItem}>
				{portfolioCard.map(({ imageBefore, imageAfter }, idx) => (
					<PortfolioCard
						key={idx}
						imageBefore={imageBefore}
						imageAfter={imageAfter}
						width={widthItem}
					/>
				))}
			</ASlider>
		</AMotionSection>
	);
};
