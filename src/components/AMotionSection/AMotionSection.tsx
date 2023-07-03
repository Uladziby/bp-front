/** @format */

import { ReactNode } from "react";
import { staggerContainer, textVariant } from "utils/motion";
import { StyledContainer, StyledContent } from "./AMotionSection.style";
import { StyledATitle } from "components/ASection/ASection.styles";

interface AMotionSectionProps {
	children: ReactNode;
	className?: string;
	title?: string;
	id?: string;
}

export const AMotionSection = ({ children, className, title, id }: AMotionSectionProps) => {
	return (
		<StyledContainer
			id={id}
			className={className}
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
		>
			<StyledATitle size={32} weight={700} lineHeight={36}>
				{title}
			</StyledATitle>
			<StyledContent variants={textVariant()}>{children}</StyledContent>
		</StyledContainer>
	);
};
