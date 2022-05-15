import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputIcon,
  itSupportsInputRightSection,
} from '@mantine/tests';
import { Input, InputProps } from './Input';

const defaultProps: InputProps<'input'> = {};

describe('@mantine/core/Input', () => {
  itIsPolymorphic(Input as any, defaultProps, '.mantine-Input-input');
  itSupportsWrapperProps(Input as any, defaultProps);
  itSupportsInputIcon(Input as any, defaultProps);
  itSupportsInputRightSection(Input as any, defaultProps);
  checkAccessibility([
    <Input aria-label="test-input" />,
    <Input placeholder="test-input" />,
    <Input placeholder="test-input" invalid />,
  ]);

  itSupportsSystemProps({
    component: Input,
    props: defaultProps,
    displayName: '@mantine/core/Input',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
