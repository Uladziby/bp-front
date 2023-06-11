/** @format */

import { MouseEvent, ReactNode } from "react";

export interface IAButtonProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	variant?: "primary" | "secondary";
	isDisabled?: boolean;
	size?: "extraSmall" | "small" | "medium" | "large";
	children: string | ReactNode;
	type?: "button" | "submit" | "reset";
	link?: string;
	className?: string;
	isActive?: boolean;
	iconTitle?: string;
	dataTestId?: string;
	isWithMotion?: boolean;
	ishidden?: boolean;
}
