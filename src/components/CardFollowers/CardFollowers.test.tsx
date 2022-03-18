import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { CardFollowers } from '.';

describe('CardFollowers component', () => {
  it('renders correctly', () => {
    renderTheme(
      <CardFollowers
        is_gained_followers={false}
        today_followers="100"
        total_followers="1000"
        type_social="facebook"
        username="cadu"
      />,
    );

    expect(screen.getByText(`1000`)).toBeInTheDocument();
    expect(screen.getByText(`cadu`)).toBeInTheDocument();
  });

  it('is renders correctly text subcribers with youtube', () => {
    renderTheme(
      <CardFollowers
        is_gained_followers={false}
        today_followers="100"
        total_followers="1000"
        type_social="youtube"
        username="cadu"
      />,
    );

    expect(screen.getByText(`SUBSCRIBERS`)).toBeInTheDocument();
  });
});
