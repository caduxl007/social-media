import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { CardOverviewToday } from '.';

describe('CardOverviewToday component', () => {
  it('renders correctly', () => {
    renderTheme(
      <CardOverviewToday
        is_gained={false}
        total_gained="100"
        qnt_percentage="1000"
        type_social="facebook"
        title="Likes"
      />,
    );

    expect(screen.getByText(`Likes`)).toBeInTheDocument();
    expect(screen.getByText(`100`)).toBeInTheDocument();
  });
});
