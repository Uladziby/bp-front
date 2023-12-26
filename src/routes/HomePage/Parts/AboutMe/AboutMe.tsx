/** @format */
import { StyledAMotionSection, StyledATitle, StyledLazyloadImage } from './AboutMe.styles';
import { ABOUTME_TEXT, ABOUTME_TITLE, ABOUT_TAG } from 'utils/constatns';
import background from 'assets/images/background.png';
import background_min from 'assets/images/background_min.png';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { useWindowSize } from 'utils/CustomHooks/useWindowSize';
import { WIDTH_M_NUM } from 'globalStyles';

export const AboutMe = () => {
  const { width } = useWindowSize();

  const defineSizeImage = () => (width <= WIDTH_M_NUM ? background_min : background);

  return (
    <StyledAMotionSection id={ABOUT_TAG}>
      <StyledLazyloadImage
        src={defineSizeImage()}
        effect="blur"
        alt="background"
        wrapperProps={{
          style: { transitionDelay: '1s', width: '100%' },
        }}
      />

      <StyledATitle
        size={42}
        weight={300}
        lineHeight={36}
        fontFamily="Cormorant Garamond"
        marginBottom={0}
      >
        {ABOUTME_TITLE}
      </StyledATitle>
      <StyledATitle size={19} weight={300} lineHeight={30} fontFamily="Manrope">
        {ABOUTME_TEXT}
      </StyledATitle>
    </StyledAMotionSection>
  );
};
