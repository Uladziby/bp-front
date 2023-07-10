/** @format */

import { StyledContainer, StyledLabel, StyledRoot, StyledThumb } from "./ASwitch.styles";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import { ThemeEnum } from "utils/themes";

interface ASwitchProps {
	value?: string;
}

export const ASwitch = ({ value }: ASwitchProps) => {
	const { currentTheme, setCurrentTheme } =
		useContext<DefaultTheme | undefined>(ThemeContext) || {};

	const onChangeThemeHadler = () => {
		setCurrentTheme(currentTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
	};

	return (
		<form>
			<StyledContainer>
				<SunIcon />
				{value && (
					<StyledLabel className="Label" htmlFor="airplane-mode">
						{value}
					</StyledLabel>
				)}
				<StyledRoot className="SwitchRoot" id="airplane-mode" onClick={onChangeThemeHadler}>
					<StyledThumb className="SwitchThumb" />
				</StyledRoot>
				<MoonIcon />
			</StyledContainer>
		</form>
	);
};
