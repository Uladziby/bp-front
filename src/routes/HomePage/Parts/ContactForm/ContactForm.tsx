/** @format */

import { AInput } from "components/AInput/AInput";
import { CONTACT_TAG, CONTACT_TITLE, SEND, SENDING } from "utils/constatns";
import { IContactForm } from "./type";
import { useForm } from "react-hook-form";
import { AForm } from "components/AForm/AForm";
import { PaperPlaneIcon, RocketIcon } from "@radix-ui/react-icons";
import {
	StyledAButton,
	StyledAMotionSection,
	StyledBlock,
	StyledContainer,
} from "./ContactForm.styles";
import emailjs from "@emailjs/browser";
import { useEffect, useMemo, useState } from "react";
import { ATextarea } from "components/ATextarea/ATextarea";
import { MESSAGE_ERROR, MESSAGE_SENDED } from "utils/message";
import { AToast } from "components/AToast/AToast";
import { ReactComponent as IconChecked } from "assets/icons/checked.svg";
import { ReactComponent as IconError } from "assets/icons/cross_cirkled.svg";

export const ContactForm = () => {
	const dataEmailJS = useMemo(
		() => ({
			serviceId: process.env.REACT_APP_SERVICEID_EMAILJS,
			templateId: process.env.REACT_APP_TEMPLATEID_EMAILJS,
			email: process.env.REACT_APP_EMAIL_EMAILJS,
			publicKey: "qW5mwagZJtDg1IgkI",
			name: "Uladzik",
		}),
		[]
	);

	const [loading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const [open, setOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const form = useForm<IContactForm>({
		mode: "onSubmit",
	});

	const { reset } = form;

	const onSbmit = (form: IContactForm) => {
		setLoading(true);

		emailjs
			.send(
				dataEmailJS.serviceId,
				dataEmailJS.templateId,
				{
					from_name: form.name,
					to_name: dataEmailJS.name,
					from_email: form.email,
					to_email: dataEmailJS.email,
					message: form.message,
				},
				dataEmailJS.publicKey
			)
			.then(
				() => {
					setLoading(false);
					reset();
					setMessage(MESSAGE_SENDED);
					setOpen(true);
				},
				(error) => {
					setLoading(false);
					setErrorMessage(error.text);
				}
			);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage("");
			setOpen(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, [message]);

	return (
		<StyledAMotionSection title={CONTACT_TITLE} id={CONTACT_TAG}>
			<StyledContainer>
				<AForm form={form} onSubmit={onSbmit}>
					<AInput type="text" name="name" placeholder="Твое имя" label="Имя" />
					<AInput
						type="email"
						name="email"
						placeholder="Твоя электронная почта"
						label="Электронная почта"
					/>
					<ATextarea name="message" placeholder="Твое сообщение" label="Сообщение" />
					<StyledBlock>
						{loading ? (
							<StyledAButton size="small" isDisabled variant="primary">
								{SENDING} <RocketIcon />
							</StyledAButton>
						) : (
							<StyledAButton size="small" type="submit">
								{SEND} <PaperPlaneIcon />
							</StyledAButton>
						)}
					</StyledBlock>
				</AForm>
				<AToast
					isOpen={open}
					context={errorMessage ? MESSAGE_ERROR : MESSAGE_SENDED}
					icon={errorMessage ? <IconError /> : <IconChecked />}
				/>
			</StyledContainer>
		</StyledAMotionSection>
	);
};
