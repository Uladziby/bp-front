/** @format */

import { COLOR_PALETTE } from "utils/colors";
import {
	StyledAMotionSection,
	StyledBlock,
	StyledName,
	StyledSubTitle,
	StyledTitle,
} from "./Introducing.styles";

export const Introducing = () => {
	return (
		<StyledAMotionSection>
			<StyledBlock>
				<StyledName
					size={24}
					lineHeight={42}
					fontFamily="Cormorant Garamond"
					weight={200}
					marginBottom={0}
					color={COLOR_PALETTE.black}
				>
					екатерина
				</StyledName>
				<StyledName
					size={24}
					lineHeight={42}
					fontFamily="Cormorant Garamond"
					weight={400}
					marginBottom={0}
					color={COLOR_PALETTE.black}
				>
					янушевская
				</StyledName>
			</StyledBlock>

			<StyledSubTitle size={20} weight={300} lineHeight={24}>
				твой персональный стилист
			</StyledSubTitle>
		</StyledAMotionSection>
	);
};
