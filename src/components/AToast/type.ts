/** @format */

import { ReactNode } from "react";

export interface AToastProps {
	title?: string;
	isOpen: boolean;
	context?: ReactNode | string;
	icon?: ReactNode;
}
