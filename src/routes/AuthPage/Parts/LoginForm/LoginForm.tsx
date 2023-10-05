/** @format */
import { useEffect, useState } from "react";
import "./LoginForm.css";
import { ASection } from "components/ASection/ASection";
import { LoginFormProps, StrengthType } from "./type";
import {
	StyledAButton,
	StyledCard,
	StyledInput,
	StyledStrengthBar,
	StyledStrengthText,
} from "./LoginForm.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { emailDomainNameValidator } from "utils/emailDomainNameValidator";
import { validationRegExp } from "utils/validationRegExp";
import { z } from "zod";
import { loginFormValidation } from "utils/message";
import { AForm } from "components/AForm/AForm";
import { ATitle } from "components/ATitle/ATitle";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_PAGE } from "utils/path";

const { emptyField, incorrectEmail, invalidSymbols, tooShortPassword } = loginFormValidation;
const strengthLabels = ["weak", "medium", "strong"];
const titleStrengthLabels = {
	weak: "Слабый пароль",
	medium: "Средний пароль",
	strong: "Cильный пароль",
};

export const LoginForm = ({ title, nameSubmitButton }: LoginFormProps) => {
	const [strength, setStrength] = useState<StrengthType>("weak");
	const navigate = useNavigate();
	const FormSchema = z.object({
		email: z
			.string()
			.min(1, emptyField)
			.regex(validationRegExp.EMAIL, incorrectEmail)
			.refine(emailDomainNameValidator, incorrectEmail),
		password: z
			.string()
			.min(1, emptyField)
			.min(6, tooShortPassword)
			.regex(validationRegExp.PASSWORD_INVALID_CHARACTERS, invalidSymbols),
	});

	type FormSchemeType = z.infer<typeof FormSchema>;

	const form = useForm<FormSchemeType>({
		resolver: zodResolver(FormSchema),
		mode: "all",
	});

	const {
		watch,
		formState: { dirtyFields },
	} = form;

	const watchPassword = watch("password");

	const onSubmit = (form: FormSchemeType) => {
		console.log(form);
		navigate(ACCOUNT_PAGE);
	};

	const getStrength = (password: string) => {
		let strengthIndicator: number = -1;

		let upper = false,
			lower = false,
			numbers = false;

		for (let index = 0; index < password.length; index++) {
			let char = password.charCodeAt(index);
			if (!upper && char >= 65 && char <= 90) {
				upper = true;
				strengthIndicator++;
			}

			if (!numbers && char >= 48 && char <= 57) {
				numbers = true;
				strengthIndicator++;
			}

			if (!lower && char >= 97 && char <= 122) {
				lower = true;
				strengthIndicator++;
			}
		}

		setStrength(strengthLabels[strengthIndicator] as StrengthType);
	};

	useEffect(() => {
		if (watchPassword) {
			getStrength(watchPassword);
		}
	}, [watchPassword]);

	return (
		<ASection>
			<StyledCard>
				<ATitle size={24} weight={600} lineHeight={26}>
					{title}
				</ATitle>
				<AForm form={form} onSubmit={onSubmit}>
					<StyledInput type="email" name="email" placeholder="Email" label="Электронная почта" />
					<StyledInput label="Пароль" type="password" name="password" placeholder="Пароль " />

					<div id="spinner" className="spinner"></div>

					{dirtyFields["password"] && (
						<StyledStrengthBar $strength={strength}>
							<div></div>
						</StyledStrengthBar>
					)}

					<StyledStrengthText>
						{dirtyFields["password"] && strength && (
							<ATitle size={12} weight={400} lineHeight={24}>
								{titleStrengthLabels[strength]}
							</ATitle>
						)}
					</StyledStrengthText>
					<StyledAButton size="large" type="submit" variant="secondary">
						{nameSubmitButton}
					</StyledAButton>
				</AForm>
			</StyledCard>
		</ASection>
	);
};
