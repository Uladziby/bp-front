/** @format */

import {
	StyledATitle,
	StyledAuthor,
	StyledContext,
	StyledTestiField,
	StyledText,
} from "./ATestimonial.style";
import { ATestimonialsProps } from "./type";

export const ATestimonials = ({ author, text, date, widthItem }: ATestimonialsProps) => {
	return (
		<StyledContext $widthItem={widthItem}>
			<StyledTestiField>
				<StyledATitle size={14} lineHeight={18} weight={400}>
					{date}
				</StyledATitle>
				<StyledText size={22} lineHeight={24} weight={400}>
					{text}
				</StyledText>
			</StyledTestiField>
			<StyledAuthor size={18} lineHeight={24} weight={700}>
				{author}
			</StyledAuthor>
		</StyledContext>
	);
};
