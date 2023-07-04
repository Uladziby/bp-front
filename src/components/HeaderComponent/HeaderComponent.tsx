/** @format */

import { useContext } from "react";
import {
	StyledADropdownMenu,
	StyledContainer,
	StyledList,
	StyledListElement,
	StyledLogo,
	StyledNavBar,
} from "./HeaderComponent.styles";
import { ASwitch } from "components/ASwitch/ASwitch";
import { DefaultTheme, ThemeContext } from "styled-components";
import { ThemeEnum } from "utils/themes";
import { useScrollingHeader } from "utils/CustomHooks/useScrollingHeader";
import { AButton } from "components/AButton/AButton";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { INavList } from "./type";
import { SIGN_UP } from "utils/constatns";

export const HeaderComponent = () => {
	const isScrolling = useScrollingHeader();

	const navList: INavList[] = [
		{ href: "about", title: "Обо мне" },
		{ href: "services", title: "Мои услуги" },
		{ href: "portfolio", title: "Портфолио" },
		{ href: "contact", title: "Контакт" },
		{ href: "opinions", title: "Отзывы" },
	];

	const { currentTheme, setCurrentTheme } =
		useContext<DefaultTheme | undefined>(ThemeContext) || {};

	const onChangeThemeHadler = () => {
		setCurrentTheme(currentTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
	};

	return (
		<StyledContainer $isScrolling={isScrolling}>
			<StyledNavBar $isScrolling={isScrolling}>
				<StyledLogo $isScrolling={isScrolling}>
					<Logo />
				</StyledLogo>
				<StyledList>
					{navList.map(({ href, title }, idx) => {
						return (
							<StyledListElement key={idx} to={`#${href}`} smooth>
								{title}
							</StyledListElement>
						);
					})}
				</StyledList>
				<AButton variant="primary" size="small" ishidden>
					{SIGN_UP}
				</AButton>
				<ASwitch onSwitchHandler={onChangeThemeHadler} />
				<StyledADropdownMenu>{navList}</StyledADropdownMenu>
			</StyledNavBar>
		</StyledContainer>
	);
};
