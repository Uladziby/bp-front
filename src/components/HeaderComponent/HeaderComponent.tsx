/** @format */

import { useContext } from "react";
import {
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

export const HeaderComponent = () => {
	const isScrolling = useScrollingHeader();

	const navList = [
		{ href: "#", title: "О мне" },
		{ href: "#", title: "Контакты" },
		{ href: "#", title: "Мои услуги" },
		{ href: "#", title: "Отзывы" },
		{ href: "#", title: "Портфолио" },
	];

	const { currentTheme, setCurrentTheme } =
		useContext<DefaultTheme | undefined>(ThemeContext) || {};

	const onChangeThemeHadler = () => {
		setCurrentTheme(currentTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
	};

	return (
		<StyledContainer className={isScrolling ? "active" : ""}>
			<StyledNavBar>
				<StyledLogo isScrolling={isScrolling}>KATYA.</StyledLogo>
				<StyledList>
					{navList.map(({ href, title }, idx) => {
						return (
							<li key={idx}>
								<StyledListElement isScrolling={isScrolling} to={href}>
									{title}
								</StyledListElement>
							</li>
						);
					})}
				</StyledList>
				<AButton variant="primary" size="small">
					Signup
				</AButton>
				<ASwitch onSwitchHandler={onChangeThemeHadler} />
			</StyledNavBar>
		</StyledContainer>
	);
};
