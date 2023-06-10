/** @format */

import { StyledContainer, StyledLabel, StyledRoot, StyledThumb } from "./ASwitch.styles";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";

interface ASwitchProps {
	onSwitchHandler?: () => void;
	value?: string;
}

export const ASwitch = ({ onSwitchHandler, value }: ASwitchProps) => {
	return (
		<form>
			<StyledContainer>
				<SunIcon />
				{value && (
					<StyledLabel className="Label" htmlFor="airplane-mode">
						{value}
					</StyledLabel>
				)}
				<StyledRoot className="SwitchRoot" id="airplane-mode" onClick={onSwitchHandler}>
					<StyledThumb className="SwitchThumb" />
				</StyledRoot>
				<MoonIcon />
			</StyledContainer>
		</form>
	);
};
