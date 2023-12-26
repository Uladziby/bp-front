/** @format */
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { AspectRatioProps } from "./type";
import { StyledContainer, StyledImage } from "./AspectRatio.style";

export const AspectRatioComponent = ({ image, width, ratio, height }: AspectRatioProps) => (
	<StyledContainer $width={width} $height={height}>
		<AspectRatio.Root ratio={ratio}>
			<StyledImage src={image} />
		</AspectRatio.Root>
	</StyledContainer>
);
