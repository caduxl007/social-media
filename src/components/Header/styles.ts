import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.blue_top_background};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const ContentHeader = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.widths.max_width};

  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;
  padding: 2rem 2rem 14rem 2rem;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2px;
  }

  p {
    color: ${({ theme }) => theme.colors.blue_text};
    font-size: 1.6rem;
  }

  div:nth-of-type(2) {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    .react-switch-bg {
      background: ${({ theme }) => theme.colors.toggle} !important;
    }

    .react-switch-handle {
      background: ${({ theme }) => theme.colors.background} !important;
    }

    @media (max-width: 375px) {
      border-top: 0.2px solid ${({ theme }) => theme.colors.blue_text};
      flex: 1;
      padding-top: 2rem;
    }
  }
`;
