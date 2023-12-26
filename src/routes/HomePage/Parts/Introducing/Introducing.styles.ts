/** @format */

import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { ATitle } from "components/ATitle/ATitle";
import { WIDTH_XXL, WIDTH_XL, WIDTH_L, WIDTH_M, WIDTH_S } from "globalStyles";
import styled from "styled-components";

export const StyledAMotionSection = styled(AMotionSection)`
	margin-top: 10rem;
	justify-content: center;
	align-items: center;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: inherit;
		border: 1px solid black;
		border-width: 0px 0 0px 0;
		width: 100%;
		max-width: 700px;

		& > h2:first-child {
			justify-content: end;
			align-items: center;
		}

		@media screen and (max-width: ${WIDTH_L}) {
			& > h2:last-child {
				align-items: end;
			}
		}
	}
`;

export const StyledName = styled(ATitle)`
	font-size: 6rem;
	flex: 1;
	display: flex;
	flex-grow: 200px;
	flex-shrink: 200px;
	top: 70%;
	width: 100%;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 1rem;
	color: ${({ theme }) => theme.colors.mauve12};

	@media screen and (max-width: ${WIDTH_XXL}) {
		font-size: 5rem;
	}

	@media screen and (max-width: ${WIDTH_XL}) {
		font-size: 4rem;
	}

	@media screen and (max-width: ${WIDTH_L}) {
		font-size: 3rem;
		letter-spacing: 0.5rem;
	}

	@media screen and (max-width: ${WIDTH_M}) {
		letter-spacing: 0.2rem;

		font-size: 3rem;
	}
	@media screen and (max-width: ${WIDTH_S}) {
		letter-spacing: 0.1rem;

		font-size: 2rem;
	}
`;

export const StyledSubTitle = styled(ATitle)`
	display: flex;
	justify-content: center;
	word-wrap: normal;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.mauve10};

	@media screen and (max-width: ${WIDTH_L}) {
		font-size: 2rem;
	}

	@media screen and (max-width: ${WIDTH_M}) {
		letter-spacing: 0.2rem;
		font-size: 1.5rem;
	}

	@media screen and (max-width: ${WIDTH_S}) {
		letter-spacing: 0.1rem;
		font-size: 1rem;
	}
`;

export const StyledBlock = styled.div`
	display: flex;
	gap: 2vw;
`;
