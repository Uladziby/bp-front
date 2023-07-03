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
	StyledATitle,
	StyledBlock,
	StyledContainer,
} from "./ContactForm.styles";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { ATextarea } from "components/ATextarea/ATextarea";
import { MESSAGE_SENDED } from "utils/message";

const serviceId = process.env.REACT_APP_SERVICEID_EMAILJS;
const templateId = process.env.REACT_APP_TEMPLATEID_EMAILJS;
const email = process.env.REACT_APP_EMAIL_EMAILJS;
const publicKey = process.env.REACT_APP_EMAILJS_KEY;
const name = "Uladzik";

export const ContactForm = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	const form = useForm<IContactForm>({
		mode: "onSubmit",
	});

	const { reset } = form;

	const onSbmit = (form: IContactForm) => {
		setLoading(true);

		emailjs
			.send(
				serviceId,
				templateId,
				{
					from_name: form.name,
					to_name: name,
					from_email: form.email,
					to_email: email,
					message: form.message,
				},
				publicKey
			)
			.then(
				() => {
					setLoading(false);
					reset();
					setMessage(MESSAGE_SENDED);
				},
				(error) => {
					setLoading(false);
					setMessage(error.text);
					console.log(error);
				}
			);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage("");
		}, 5000);

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
						<StyledATitle size={12} weight={400} lineHeight={18}>
							{message}
						</StyledATitle>
					</StyledBlock>
				</AForm>
			</StyledContainer>
		</StyledAMotionSection>
	);
};
