/** @format */

import { StyledAMotionSection, StyledATitle, StyledAboutMePhoto } from "./AboutMe.styles";
import { ABOUTME_TITLE, ABOUTME_TEXT, ABOUT_TAG } from "utils/constatns";
import background from "assets/katrix_1.jpg";

export const AboutMe = () => {
	return (
		<StyledAMotionSection id={ABOUT_TAG} title={ABOUTME_TITLE}>
			<StyledAboutMePhoto src={background} alt="about_me" />
			<StyledATitle size={24} weight={400} lineHeight={36}>
				{ABOUTME_TEXT}
			</StyledATitle>
		</StyledAMotionSection>
	);
};
