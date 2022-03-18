import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { SwitchButtonTheme } from '.';

jest.mock('hooks/useTheme', () => {
  return {
    useTheme() {
      return {
        toggleTheme() {},
        theme: 'light',
      };
    },
  };
});

describe('SwitchButtonTheme component', () => {
  it('renders correctly', () => {
    const { debug } = renderTheme(<SwitchButtonTheme />);

    expect(screen).toBeTruthy();
  });
});
