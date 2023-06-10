/** @format */
import {
	indigo,
	gray,
	slate,
	indigoDark,
	grayDark,
	slateDark,
	mauve,
	mauveDark,
} from "@radix-ui/colors";

export const base = {
	breakpoints: ["768px"],
	space: ["0px", "2px", "4px", "8px", "16px", "32px", "64px"],
	fonts: {
		heading: "Inter, system-ui, sans-serif",
		body: "Inter, system-ui, sans-serif",
	},
	fontSizes: ["12px", "14px", "16px", "20px", "24px"],
};

export enum ThemeEnum {
	light = "Light",
	dark = "Dark",
}

export const Light = {
	...indigo,
	...gray,
	...slate,
	...mauve,
};

export const Dark = {
	...indigoDark,
	...grayDark,
	...slateDark,
	...mauveDark,
};

export const themesMap = {
	Light,
	Dark,
};
