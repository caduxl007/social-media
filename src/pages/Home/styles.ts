import styled from 'styled-components';

export const Container = styled.div`
  > main {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.widths.max_width};
    padding: 2rem;
  }
`;

export const ContentCardsFollowers = styled.section`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: space-around;

  position: relative;
  top: -100px;
`;

export const ContentCardsOverviewToday = styled.section`
  h2 {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

   >div {
    margin-top: 2rem;
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
