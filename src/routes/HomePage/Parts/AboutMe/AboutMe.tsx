/** @format */

import { StyledAMotionSection, StyledATitle, StyledPhoto } from "./AboutMe.styles";
import { ABOUTME_TEXT, ABOUTME_TITLE, ABOUT_TAG } from "utils/constatns";

export const AboutMe = () => {
	return (
		<StyledAMotionSection id={ABOUT_TAG}>
			<StyledPhoto />
			<StyledATitle size={42} weight={300} lineHeight={36} fontFamily="Cormorant Garamond">
				{ABOUTME_TITLE}
			</StyledATitle>
			<StyledATitle size={22} weight={300} lineHeight={36} fontFamily="Manrope">
				{ABOUTME_TEXT}
			</StyledATitle>
		</StyledAMotionSection>
	);
};
