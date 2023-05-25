/** @format */

import { ReactNode } from "react";

export interface ServiceCardProps {
	title?: string;
	subtitle?: string;
	backgroundImage: string;
	context?: string | ReactNode;
	width: number;
	height?: number;
}

export interface IServiceCard {
	title?: string;
	subtitle?: string;
	backgroundImage: string;
	context?: string | ReactNode;
}
