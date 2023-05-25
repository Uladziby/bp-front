import { RenderResult, render, screen } from '@testing-library/react';
import { ATitle } from '../ATitle';

describe('ATitle', () => {
  const props = {
    size: 30,
    weight: 900,
    lineHeight: 2,
    color: 'white',
    marginBottom: 20,
    children: <p>child</p>,
  };
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ATitle {...props} />);
  });

  it('should render correctly', () => {
    const element = screen.getByRole('heading');

    expect(element).toBeInTheDocument();
    expect(element.innerHTML).toEqual('<p>child</p>');
  });

  it('snapshot', () => {
    const element = screen.getByRole('heading');

    expect(element).toMatchSnapshot();
  });

  it('handles property color correctly', () => {
    const element = screen.getByRole('heading');

    expect(element).toHaveStyle({ color: 'white' });
  });

  it('handles property marginBottom correctly', () => {
    const element = screen.getByRole('heading');

    expect(element).toHaveStyle({ marginBottom: '20px' });
  });

  it('handles property size correctly', () => {
    const element = screen.getByRole('heading');

    expect(element).toHaveStyle({ fontSize: '30px' });
  });

  it('handles property weight correctly', () => {
    const element = screen.getByRole('heading');

    expect(element).toHaveStyle({ fontWeight: '900' });
  });
});
