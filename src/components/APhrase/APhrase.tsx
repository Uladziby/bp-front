/** @format */

import { StyledContainer, StyledPhrase } from "./APhrase.styles";
import { IAPhraseProps } from "./type";

export const APhrase = ({
	children,
	className,
	dataTestId,
	color,
	size,
	weight,
	lineHeight,
	fontFamily,
}: IAPhraseProps) => (
	<StyledContainer>
		<StyledPhrase
			color={color}
			$size={size}
			$weight={weight}
			$lineHeight={lineHeight}
			data-testid={dataTestId}
			className={className}
			$fontFamily={fontFamily}
		>
			{children}
		</StyledPhrase>
	</StyledContainer>
);
