/** @format */
import {
	FooterContainer,
	FooterText,
	FooterLink,
	StyledIconLink,
	SocialIcons,
	StyledATitle,
} from "./Footer.styles";
import { ReactComponent as TelegramIcon } from "assets/icons/telegram.svg";
import { ReactComponent as InstaIcon } from "assets/icons/insta.svg";

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<SocialIcons>
				<StyledIconLink href="https://www.instagram.com/yanushevskaja/" target="_blank">
					<InstaIcon />
					<StyledATitle size={18} weight={400} lineHeight={24}>
						@yanushevskaja
					</StyledATitle>
				</StyledIconLink>
				<StyledIconLink href="https://t.me/Katarzyna_y" target="_blank">
					<TelegramIcon />
					<StyledATitle size={18} weight={400} lineHeight={24}>
						@Katarzyna_y
					</StyledATitle>
				</StyledIconLink>
			</SocialIcons>
			<FooterText>
				© {new Date().getFullYear()} K.Yanushevskaya | Powered by{" "}
				<FooterLink href="https://www.example.com">FlexDesignStudio</FooterLink>
			</FooterText>
		</FooterContainer>
	);
};
