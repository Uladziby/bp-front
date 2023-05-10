/** @format */

import { useContext, useId } from "react";
import {
	StyledContainer,
	StyledList,
	StyledListElement,
	StyledLogo,
	StyledNavBar,
} from "./HeaderComponent.styles";
import { ASwitch } from "components/ASwitch/ASwitch";
import { DefaultTheme, ThemeContext } from "styled-components";
import { ThemeEnum } from "App";

export const HeaderComponent = () => {
	const id = useId();
	const navList = [
		{ href: "#", title: "Home" },
		{ href: "#", title: "Contact" },
		{ href: "#", title: "Pricing" },
	];

	const { currentTheme, setCurrentTheme } =
		useContext<DefaultTheme | undefined>(ThemeContext) || {};

	const onChangeThemeHadler = () => {
		setCurrentTheme(currentTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
	};

	return (
		<StyledContainer>
			<StyledNavBar>
				<StyledLogo>KATYA.</StyledLogo>
				<StyledList>
					{navList.map(({ href, title }, idx) => {
						return (
							<li key={idx}>
								<StyledListElement href={href}> {title}</StyledListElement>
							</li>
						);
					})}
				</StyledList>
				<ASwitch onSwitchHandler={onChangeThemeHadler} />
			</StyledNavBar>
		</StyledContainer>
	);
};
