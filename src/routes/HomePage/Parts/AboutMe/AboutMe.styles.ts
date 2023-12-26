/** @format */

import { styled } from 'styled-components';
import { ATitle } from 'components/ATitle/ATitle';
import { AMotionSection } from 'components/AMotionSection/AMotionSection';
import { WIDTH_S } from 'globalStyles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import background from 'assets/images/background.png';

export const StyledATitle = styled(ATitle)`
  text-align: justify;
  padding: 2rem 5rem;

  color: ${({ theme }) => theme.colors.mauve12};
  max-width: 1000px;

  @media screen and (max-width: ${WIDTH_S}) {
    font-size: 14px;
  }
`;

export const StyledLazyloadImage = styled(LazyLoadImage)`
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  object-fit: fill;
`;

export const StyledAMotionSection = styled(AMotionSection)`
  display: flex;
  justify-content: center;
  padding: 0 0 5rem;
`;
