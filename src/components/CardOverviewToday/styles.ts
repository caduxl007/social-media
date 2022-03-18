import styled from 'styled-components';

interface ContainerProps {
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  is_gained: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.blue_card};
  max-width: 28rem;
  width: 100%;
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  cursor: pointer;

  text-align: center;
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors.blue_text};
      font-size: 1.7rem;
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.7rem;

    h5 {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.text};
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      img {
        width: 0.8rem;
        height: 0.8rem;
      }

      p {
        font-size: 1.3rem;
        font-weight: bold;

        color: ${({ is_gained, theme }) =>
          is_gained
            ? theme.colors.lime_green
            : theme.colors.bright_red};
      }
    }
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
