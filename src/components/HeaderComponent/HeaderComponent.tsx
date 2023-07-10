/** @format */
import {
	StyledADropdownMenu,
	StyledContainer,
	StyledList,
	StyledListElement,
	StyledLogo,
	StyledNavBar,
} from "./HeaderComponent.styles";
import { useScrollingHeader } from "utils/CustomHooks/useScrollingHeader";
import { AButton } from "components/AButton/AButton";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { INavList } from "./type";
import {
	ABOUT_TAG,
	CONTACT_TAG,
	PORTFOLIO_TAG,
	SERVICES_TAG,
	SIGN_UP,
	TESTIMONIALS_TAG,
} from "utils/constatns";
import { ASwitch } from "components/ASwitch/ASwitch";
import { useWindowSize } from "utils/CustomHooks/useWindowSize";
import { WIDTH_XL_NUM } from "globalStyles";

export const HeaderComponent = () => {
	const isScrolling = useScrollingHeader();
	const { width } = useWindowSize();

	const navList: INavList[] = [
		{ href: ABOUT_TAG, title: "Обо мне" },
		{ href: SERVICES_TAG, title: "Мои услуги" },
		{ href: PORTFOLIO_TAG, title: "Портфолио" },
		{ href: CONTACT_TAG, title: "Контакт" },
		{ href: TESTIMONIALS_TAG, title: "Отзывы" },
	];

	return (
		<StyledContainer $isScrolling={isScrolling}>
			<StyledNavBar $isScrolling={isScrolling}>
				<StyledLogo $isScrolling={isScrolling}>
					<Logo />
				</StyledLogo>
				<StyledList>
					{navList.map(({ href, title }, idx) => {
						return (
							<StyledListElement key={idx} to={`#${href}`} smooth>
								{title}
							</StyledListElement>
						);
					})}
				</StyledList>
				<AButton variant="primary" size="small" ishidden>
					{SIGN_UP}
				</AButton>
				{width >= WIDTH_XL_NUM ? <ASwitch /> : null}
				<StyledADropdownMenu>{navList}</StyledADropdownMenu>
			</StyledNavBar>
		</StyledContainer>
	);
};
