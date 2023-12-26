import { StyledContainer } from './AMessage.styles';
import { IAMessageProps } from './type';

export const AMessage = ({ children, type, className }: IAMessageProps) => (
  <StyledContainer data-testid="aMessage" className={className} type={type}>
    {children}
  </StyledContainer>
);
