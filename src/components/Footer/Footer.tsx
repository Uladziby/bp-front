/** @format */
import {
	FooterContainer,
	FooterText,
	FooterLink,
	StyledIconLink,
	SocialIcons,
} from "./Footer.styles";
import { ReactComponent as TelegramIcon } from "assets/icons/telegram.svg";
import { ReactComponent as InstaIcon } from "assets/icons/instagram.svg";
import { ReactComponent as MailIcon } from "assets/icons/envelope.svg";

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<SocialIcons>
				<StyledIconLink href="https://www.instagram.com/yanushevskaja/" target="_blank">
					<InstaIcon />
				</StyledIconLink>
				<StyledIconLink href="https://t.me/Katarzyna_y" target="_blank">
					<TelegramIcon />
				</StyledIconLink>
				<StyledIconLink href="mailto:katrina0203@mail.ru" target="_blank">
					<MailIcon />
				</StyledIconLink>
			</SocialIcons>

			<FooterText>
				© {new Date().getFullYear()} K.Yanushevskaya | Powered by{" "}
				<FooterLink href="https://www.flexdesignstudio.com/">FlexDesignStudio</FooterLink>
			</FooterText>
		</FooterContainer>
	);
};
