/** @format */

import { buttonWithMotion } from "utils/motion";
import { StyledButton } from "./AButton.styles";
import { IAButtonProps } from "./type";

export const AButton = ({
	onClick,
	children,
	variant,
	isDisabled,
	size,
	isActive,
	iconTitle,
	type = "button",
	className,
	dataTestId,
	isWithMotion = false,
	ishidden,
}: IAButtonProps) => (
	<StyledButton
		{...buttonWithMotion(isWithMotion)}
		onClick={onClick}
		title={iconTitle}
		data-testid={dataTestId}
		variant={variant}
		disabled={isDisabled}
		size={size}
		type={type}
		className={className}
		isActive={isActive}
		$ishidden={ishidden}
	>
		{children}
	</StyledButton>
);
