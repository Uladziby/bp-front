/** @format */

import { AspectRatioComponent } from "components/AspectRatio/AspectRatio";
import { StyledContext } from "./ATestimonial.style";
import { ATestimonialsProps } from "./type";

export const ATestimonials = ({ srcImg, widthItem }: ATestimonialsProps) => {
	return (
		<StyledContext>
			<AspectRatioComponent width={widthItem} image={srcImg} ratio={1} />
		</StyledContext>
	);
};
