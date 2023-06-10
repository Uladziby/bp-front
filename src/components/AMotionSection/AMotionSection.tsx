/** @format */

import { ReactNode } from "react";
import { staggerContainer } from "utils/motion";
import { StyledContainer } from "./AMotionSection.style";
import { StyledATitle } from "components/ASection/ASection.styles";

interface AMotionSectionProps {
	children: ReactNode;
	className?: string;
	title?: string;
}

export const AMotionSection = ({ children, className, title }: AMotionSectionProps) => {
	return (
		<StyledContainer
			className={className}
			variants={staggerContainer()}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
		>
			<StyledATitle size={32} weight={700} lineHeight={36}>
				{title}
			</StyledATitle>
			{children}
		</StyledContainer>
	);
};
