/** @format */

import { StyledTitle } from "./ATitle.styles";
import { IATitleProps } from "./type";

export const ATitle = ({
	size,
	weight,
	lineHeight,
	children,
	color,
	marginBottom,
	dataTestId,
	className,
}: IATitleProps) => (
	<StyledTitle
		size={size}
		weight={weight}
		lineheight={lineHeight}
		color={color}
		marginBottom={marginBottom}
		data-testid={dataTestId}
		className={className}
	>
		{children}
	</StyledTitle>
);
