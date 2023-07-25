/** @format */
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { useEffect, useRef, useState } from "react";
import {
	TESTIMONIALS_TAG,
	TESTIMONIALS_TITLE,
	TESTI_ClIENT1,
	TESTI_ClIENT2,
	TESTI_ClIENT3,
} from "utils/constatns";
import { ATestimonialsProps } from "./Parts/type";
import { ATestimonials } from "./Parts/ATestimonial";
import { StyledContext, StyledWrapper } from "./Testimonials.style";
import { useWindowSize } from "utils/CustomHooks/useWindowSize";
import { WIDTH_L_NUM } from "globalStyles";
import testi_1 from "assets/images/testi_1.jpg";
import testi_2 from "assets/images/testi_2.jpg";
import { useGetOffsetWidth } from "utils/CustomHooks/useGetOffsetWidth";

const mockTesti: Omit<ATestimonialsProps, "widthItem">[] = [
	{
		text: TESTI_ClIENT1,
		author: "Екатерина Якуш",
		date: "21.23.1222",
		srcImg: testi_1,
	},
	{
		text: TESTI_ClIENT2,
		author: "Иван Иванов",
		date: "21.23.1222",
		srcImg: testi_2,
	},
	{
		text: TESTI_ClIENT3,
		author: "Иван Иванов",
		date: "21.23.1222",
		srcImg: testi_1,
	},
];

const delaySlide = 5000;
const gap = 120;
const SIZE_ITEM_PHONE = 295;
const SIZE_ITEM_DESKTOP = 430;

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
		}, 3000);
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
