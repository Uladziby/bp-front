/** @format */
import { StyledAMotionSection, StyledATitle } from "./AboutMe.styles";
import { ABOUTME_TEXT, ABOUTME_TITLE, ABOUT_TAG } from "utils/constatns";
import background from "assets/images/background.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const AboutMe = () => {
	return (
		<StyledAMotionSection id={ABOUT_TAG}>
			<LazyLoadImage
				src={background}
				effect="blur"
				style={{
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "100%",
				}}
				wrapperProps={{
					style: { transitionDelay: "1s", width: "100%" },
				}}
			/>

			<StyledATitle
				size={42}
				weight={300}
				lineHeight={36}
				fontFamily="Cormorant Garamond"
				marginBottom={0}
			>
				{ABOUTME_TITLE}
			</StyledATitle>
			<StyledATitle size={19} weight={300} lineHeight={30} fontFamily="Manrope">
				{ABOUTME_TEXT}
			</StyledATitle>
		</StyledAMotionSection>
	);
};
