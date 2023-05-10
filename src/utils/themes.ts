/** @format */

import { blue, blueDark, gray, grayDark, green, greenDark, red, redDark } from "@radix-ui/colors";
import { indigo, bronze, slate, indigoDark, bronzeDark, slateDark } from "@radix-ui/colors";

export const base = {
	breakpoints: ["768px"],
	space: ["0px", "2px", "4px", "8px", "16px", "32px", "64px"],
	fonts: {
		heading: "Inter, system-ui, sans-serif",
		body: "Inter, system-ui, sans-serif",
	},
	fontSizes: ["12px", "14px", "16px", "20px", "24px"],
};

/* export const Light = {
	primary: "#4851f4",
	background: "#ffffff",
	nav: "#f8f8f8",
	border: "#deebf1",
	text: "#202224",
};

export const Dark = {
	primary: "#4851f4",
	background: "#1f2023",
	nav: "#27282b",
	border: "#303236",
	text: "#f8f8f8",
}; */

export const Light = {
	...indigo,
	...bronze,
	...slate,
};

export const Dark = {
	...indigoDark,
	...bronzeDark,
	...slateDark,
};
