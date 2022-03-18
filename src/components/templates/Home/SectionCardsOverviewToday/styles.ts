import styled from 'styled-components';

export const Container = styled.section`
  overflow: hidden;
  h2 {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  > ul {
    margin-top: 2rem;
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
