/** @format */

import { useEffect, useRef, useState } from "react";
import { useController } from "react-hook-form";
import { ReactComponent as DangerIcon } from "assets/icons/inputAlert.svg";
import {
	StyledCounter,
	StyledErrorIcon,
	StyledErrorMessage,
	StyledLabel,
	StyledTextarea,
	StyledWrapper,
} from "./ATextarea.styles";
import { IATextarea } from "./type";
import { textareaLineHeight, textareaVerticalPaddings, borderWidth } from "./formFieldParameters";

export const ATextarea = ({
	name,
	placeholder,
	label,
	isDisabled,
	maxLength,
	rows = 1,
	defaultValue,
}: IATextarea) => {
	const [isShowCounter, setIsShowCounter] = useState(false);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleFocus = () => {
		if (maxLength) {
			setIsShowCounter((prevState) => !prevState);
		}
	};

	const {
		field,
		fieldState: { error },
	} = useController({ name, shouldUnregister: true, defaultValue: defaultValue || "" });

	useEffect(() => {
		if (!textAreaRef.current) return;

		const initTextareaHeight = rows * textareaLineHeight + textareaVerticalPaddings;

		textAreaRef.current.style.height = initTextareaHeight + "px";

		textAreaRef.current.style.height = textAreaRef.current.scrollHeight + borderWidth + "px";
	}, [field.value, rows]);

	return (
		<StyledWrapper onFocus={handleFocus} onBlur={handleFocus}>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			<StyledTextarea
				{...field}
				id={name}
				placeholder={placeholder}
				disabled={isDisabled}
				rows={rows}
				$hasError={Boolean(error)}
				ref={textAreaRef}
			/>
			{error && (
				<StyledErrorIcon>
					<DangerIcon />
				</StyledErrorIcon>
			)}
			{field.value && !error && isShowCounter && (
				<StyledCounter data-testid="counter">
					{field.value.trim().length}/{maxLength}
				</StyledCounter>
			)}
			{error && <StyledErrorMessage>{String(error.message)}</StyledErrorMessage>}
		</StyledWrapper>
	);
};
