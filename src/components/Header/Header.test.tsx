import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Header } from '.';

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

describe('Header component', () => {

  it('renders correctly', () => {
  const total_followers = '2300';

    renderTheme(<Header total_followers={total_followers} />);

    expect(screen.getByText(`Total Followers: ${total_followers}`)).toBeInTheDocument();
  });
});
