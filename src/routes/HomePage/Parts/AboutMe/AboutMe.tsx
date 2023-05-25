/** @format */

import { AboutMePhoto, StyledASection, StyledATitle, StyledBlock } from "./AboutMe.styles";
import { ABOUTME_TITLE, ABOUTME_TEXT } from "utils/constatns";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import background from "../../../../assets/about_me_photo.jpg";

export const AboutMe = () => {
	return (
		<StyledASection>
			<StyledBlock>
				<AspectRatio.Root ratio={1 / 2}>
					<AboutMePhoto src={background} alt="about_me" />
				</AspectRatio.Root>
			</StyledBlock>
			<StyledBlock>
				<StyledATitle size={36} weight={700} lineHeight={36}>
					{ABOUTME_TITLE}
				</StyledATitle>
				<StyledATitle size={24} weight={400} lineHeight={36}>
					{ABOUTME_TEXT}
				</StyledATitle>
			</StyledBlock>
		</StyledASection>
	);
};
// создать следующий раздел Портфолио со слайдером из зооо
//или Портфолио найти анимацию до после
//hover card добавить для иомх услуг
