/** @format */

import { AboutMePhoto, StyledAMotionSection, StyledATitle, StyledBlock } from "./AboutMe.styles";
import { ABOUTME_TITLE, ABOUTME_TEXT } from "utils/constatns";
import background from "../../../../assets/about_me_photo.jpg";
import { motion } from "framer-motion";
import { textVariant } from "utils/motion";

export const AboutMe = () => {
	return (
		<StyledAMotionSection>
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
		</StyledAMotionSection>
	);
};
