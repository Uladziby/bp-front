/** @format */

import { AboutMePhoto, StyledATitle, StyledBlock } from "./AboutMe.styles";
import { ABOUTME_TITLE, ABOUTME_TEXT, ABOUT_TAG } from "utils/constatns";
import background from "../../../../assets/katrix_1.jpg";
import { motion } from "framer-motion";
import { textVariant } from "utils/motion";
import { AMotionSection } from "components/AMotionSection/AMotionSection";

export const AboutMe = () => {
	return (
		<AMotionSection id={ABOUT_TAG}>
			<StyledBlock variants={textVariant()}>
				<AboutMePhoto src={background} alt="about_me" />
			</StyledBlock>
			<StyledBlock variants={textVariant()}>
				<StyledATitle size={36} weight={700} lineHeight={36}>
					{ABOUTME_TITLE}
				</StyledATitle>
				<motion.div variants={textVariant()}>
					<StyledATitle size={24} weight={400} lineHeight={36}>
						{ABOUTME_TEXT}
					</StyledATitle>
				</motion.div>
			</StyledBlock>
		</AMotionSection>
	);
};
