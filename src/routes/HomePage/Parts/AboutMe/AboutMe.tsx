/** @format */

import { StyledAMotionSection, StyledATitle, StyledAboutMePhoto } from "./AboutMe.styles";
import { ABOUTME_TITLE, ABOUTME_TEXT, ABOUT_TAG } from "utils/constatns";
import AboutMePhoto from "assets/katrix_1.jpg";
import { AspectRatioComponent } from "components/AspectRatio/AspectRatio";

export const AboutMe = () => {
	return (
		<StyledAMotionSection id={ABOUT_TAG}>
			<AspectRatioComponent image={AboutMePhoto} width={320} ratio={3 / 4} />
			<StyledATitle size={24} weight={400} lineHeight={36}>
				{ABOUTME_TEXT}
			</StyledATitle>
		</StyledAMotionSection>
	);
};
