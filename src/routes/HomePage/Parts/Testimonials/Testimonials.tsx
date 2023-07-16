/** @format */
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { useEffect, useRef } from "react";
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

const mockTesti: Omit<ATestimonialsProps, "widthItem">[] = [
	{
		text: TESTI_ClIENT1,
		author: "Екатерина Якуш",
		date: "21.23.1222",
	},
	{
		text: TESTI_ClIENT2,
		author: "Иван Иванов",
		date: "21.23.1222",
	},
	{
		text: TESTI_ClIENT3,
		author: "Иван Иванов",
		date: "21.23.1222",
	},
];

export const Testimonials = () => {
	const { width } = useWindowSize();
	const tCarouselRef = useRef<HTMLDivElement>(null);
	const tContentRef = useRef<HTMLDivElement>(null);

	let autoSlideInterval: NodeJS.Timer;
	let autoSlideTimeout: NodeJS.Timeout;

	let widthT = 0;
	let gap = 120;
	let widthItem = 500;

	const slideFuncTesty = () => {
		const tCarousel = tCarouselRef.current!;
		const tContent = tContentRef.current!;

		tCarousel.scrollBy(widthT + gap, 0);

		console.log(widthT, gap);

		if (tContent.scrollWidth <= tCarousel.scrollLeft + widthT) {
			tCarousel.scrollBy(-(widthT + gap * 2) * 3, 0);
		}
	};

	const delayAutoSliding = () => {
		clearInterval(autoSlideInterval);
		clearTimeout(autoSlideTimeout);

		autoSlideTimeout = setTimeout(() => {
			autoSlideInterval = setInterval(slideFuncTesty, 3000);
		}, 3000);
	};

	useEffect(() => {
		const tCarousel = tCarouselRef.current;

		const updateWidth = () => {
			widthT = tCarousel!.offsetWidth;
			gap = width >= WIDTH_L_NUM ? 0 : 120;
			widthItem = width >= WIDTH_L_NUM ? 400 : 295;
		};

		window.addEventListener("resize", updateWidth);

		updateWidth();

		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []);

	useEffect(() => {
		delayAutoSliding();

		return () => {
			clearInterval(autoSlideInterval);
			clearTimeout(autoSlideTimeout);

			tCarouselRef.current!.removeEventListener("click", delayAutoSliding);
		};
	}, []);

	return (
		<AMotionSection title={TESTIMONIALS_TITLE} id={TESTIMONIALS_TAG}>
			<StyledWrapper ref={tCarouselRef} $width={widthItem}>
				<StyledContext ref={tContentRef}>
					{mockTesti.map(({ text, author, date }, idx) => (
						<ATestimonials
							key={idx}
							text={text}
							author={author}
							date={date}
							widthItem={widthItem}
						/>
					))}
				</StyledContext>
			</StyledWrapper>
		</AMotionSection>
	);
};
