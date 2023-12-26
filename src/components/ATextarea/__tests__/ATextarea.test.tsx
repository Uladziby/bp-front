import { RenderResult, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import { INPUT_COLORS } from 'constants/colors/colors';
import { ATextarea } from '../ATextarea';

describe('ATextarea', () => {
  const { result } = renderHook(() => useForm());
  const form = result.current;

  const props = {
    name: 'name',
    label: 'label',
    placeholder: 'placeholder',
    isDisabled: false,
    defaultValue: 'value',
    rows: 2,
    maxLength: 20,
  };
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <FormProvider {...form}>
        <ATextarea {...props} />
      </FormProvider>,
    );
  });

  it('should render correctly', () => {
    const textarea = screen.getByRole('textbox');

    expect(textarea).toBeInTheDocument();
  });

  it('snapshot', () => {
    const textarea = screen.getByRole('textbox');
    expect(textarea).toMatchSnapshot();
  });

  it('handles property name correctly', () => {
    const labelEl = screen.getByText(props.label);
    const textarea = screen.getByLabelText(props.label);

    expect(labelEl).toHaveAttribute('for', props.name);
    expect(textarea).toHaveAttribute('id', props.name);
  });

  it('handles property label correctly', () => {
    const label = screen.getByText(props.label);

    expect(label.tagName).toBe('LABEL');
    expect(label.textContent).toBe(props.label);
  });

  it('handles property placeholder correctly', () => {
    const textarea = screen.getByPlaceholderText(props.placeholder);

    expect(textarea).toBeInTheDocument();
  });

  it('handles property isDisabled=true correctly', () => {
    renderResult.rerender(
      <FormProvider {...form}>
        <ATextarea {...props} isDisabled />
      </FormProvider>,
    );

    const textarea = screen.getByRole('textbox');

    expect(textarea).toHaveStyle({
      border: `1px solid ${INPUT_COLORS.disabled}`,
    });
  });

  it('handles property isDisabled=false correctly', () => {
    const textarea = screen.getByRole('textbox');

    expect(textarea).toHaveStyle({ border: `1px solid ${INPUT_COLORS.default}` });
  });

  it('handles property defaultValue correctly', () => {
    const textarea = screen.getByRole('textbox');

    expect(textarea.textContent).toBe(props.defaultValue);
  });

  it('handles property maxLength correctly', () => {
    const value = 'some value';

    const textarea = screen.getByRole('textbox');

    userEvent.click(textarea);
    userEvent.type(textarea, value);

    const counter = screen.getByTestId('counter');

    expect(counter.textContent).toBe(
      `${value.length + props.defaultValue.length}/${props.maxLength}`,
    );
  });
});
