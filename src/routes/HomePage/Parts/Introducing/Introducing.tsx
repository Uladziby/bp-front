/** @format */

import {
	StyledAMotionSection,
	StyledBlock,
	StyledName,
	StyledSubTitle,
} from "./Introducing.styles";
import { INTRODUCING } from "utils/constatns";

export const Introducing = () => {
	const { lastName, firstName, subtitle } = INTRODUCING;

	return (
		<StyledAMotionSection>
			<StyledBlock>
				<StyledName
					size={24}
					lineHeight={42}
					fontFamily="Cormorant Garamond"
					weight={300}
					marginBottom={0}
				>
					{firstName}
				</StyledName>
				<StyledName
					size={24}
					lineHeight={42}
					fontFamily="Cormorant Garamond"
					weight={300}
					marginBottom={0}
				>
					{lastName}
				</StyledName>
			</StyledBlock>

			<StyledSubTitle size={20} weight={300} lineHeight={24}>
				{subtitle}
			</StyledSubTitle>
		</StyledAMotionSection>
	);
};
