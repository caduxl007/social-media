import styled from 'styled-components';

interface ContainerProps {
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  is_gained_followers: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors.blue_card};
  max-width: 28rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  cursor: pointer;

  text-align: center;
  border-radius: 6px;
  border-top: 4px solid ${({ theme, type_social }) => theme.colors[type_social]};

   p,
  h1 {
    color: ${({ theme }) => theme.colors.blue_text};
    font-size: 1.7rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  div {
    h5 {
      font-size: 5.5rem;
      color: ${({ theme }) => theme.colors.text};
    }

    p {
      letter-spacing: 4px;
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;

    img {
      width: 0.8rem;
      height: 0.8rem;
    }

    p {
      font-size: 1.3rem;
      font-weight: bold;

     color: ${({is_gained_followers, theme}) => is_gained_followers ? theme.colors.lime_green : theme.colors.bright_red};
    }
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
