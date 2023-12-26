/** @format */
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS_TAG, TESTIMONIALS_TITLE } from "utils/constatns";
import { ATestimonials } from "./Parts/ATestimonial";
import { StyledContext, StyledWrapper } from "./Testimonials.style";
import { useWindowSize } from "utils/CustomHooks/useWindowSize";
import { WIDTH_L_NUM } from "globalStyles";
import { useGetOffsetWidth } from "utils/CustomHooks/useGetOffsetWidth";
import { gap, delaySlide, SIZE_ITEM_PHONE, SIZE_ITEM_DESKTOP, mockTesti } from "./constants";

export const Testimonials = () => {
	const { width } = useWindowSize();
	const [widthElement, setWidthT] = useState<number>(0);

	const tContentRef = useRef<HTMLDivElement>(null);
	const tCarouselRef = useRef<HTMLDivElement>(null);
	const offsetWidth = useGetOffsetWidth(tContentRef, widthElement);

	let autoSlideInterval: NodeJS.Timer;
	let autoSlideTimeout: NodeJS.Timeout;

	const slideFuncTesty = () => {
		const tCarousel = tCarouselRef.current!;
		const tContent = tContentRef.current!;

		tCarousel.scrollBy(offsetWidth + gap, 0);

		if (tContent.scrollWidth <= tCarousel.scrollLeft + offsetWidth + gap) {
			tCarousel.scrollBy(-(offsetWidth + gap * 2) * mockTesti.length, 0);
		}
	};

	const delayAutoSliding = () => {
		clearInterval(autoSlideInterval);
		clearTimeout(autoSlideTimeout);

		autoSlideTimeout = setTimeout(() => {
			autoSlideInterval = setInterval(slideFuncTesty, delaySlide);
		}, 4000);
	};

	useEffect(() => {
		setWidthT(width <= WIDTH_L_NUM ? SIZE_ITEM_PHONE : SIZE_ITEM_DESKTOP);
		delayAutoSliding();

		return () => {
			clearInterval(autoSlideInterval);
			clearTimeout(autoSlideTimeout);
		};
	}, [widthElement, width, offsetWidth]);

	return (
		<AMotionSection title={TESTIMONIALS_TITLE} id={TESTIMONIALS_TAG}>
			<StyledWrapper $width={widthElement} ref={tCarouselRef}>
				<StyledContext ref={tContentRef} $gap={gap}>
					{mockTesti.map(({ text, author, date, srcImg }, idx) => (
						<ATestimonials
							key={idx}
							text={text}
							author={author}
							date={date}
							widthItem={widthElement}
							srcImg={srcImg}
						/>
					))}
				</StyledContext>
			</StyledWrapper>
		</AMotionSection>
	);
};
