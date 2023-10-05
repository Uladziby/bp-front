/** @format */

export interface LoginFormProps {
	title?: string;
	nameSubmitButton: string;
}

export enum StrongPasswordEnum {
	weak,
	medium,
	strong,
}

export type StrengthObjectType = {
	value: StrengthType;
	indicator: number;
};

export type StrengthType = "weak" | "medium" | "strong";
