/** @format */

export interface LoginFormProps {
	title?: string;
	nameSubmitButton: string;
	onSubmitHandler: (form: ILoginForm) => void;
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

export interface ILoginForm {
	email: string;
	password: string;
}
