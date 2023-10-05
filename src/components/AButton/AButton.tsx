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
	$isActive,
	iconTitle,
	type = "button",
	className,
	dataTestId,
	isWithMotion = false,
	ishidden,
}: IAButtonProps) => (
	<StyledButton
		data-testid={dataTestId}
		className={className}
		onClick={onClick}
		{...buttonWithMotion(isWithMotion)}
		title={iconTitle}
		variant={variant}
		disabled={isDisabled}
		size={size}
		type={type}
		$isActive={$isActive}
		$ishidden={ishidden}
	>
		{children}
	</StyledButton>
);
