import {
  IconDown,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconUp,
  IconYoutube
} from 'assets/icons';
import { useMemo } from 'react';
import * as S from './styles';

interface CardFollowersProps {
  title: string;
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  total_gained: string;
  qnt_percentage: string;
  is_gained_followers: boolean;
}

export function CardOverviewToday({
  title,
  type_social,
  total_gained,
  qnt_percentage,
  is_gained_followers,
}: CardFollowersProps) {
  const icon_social = useMemo(() => {
    switch (type_social) {
      case 'facebook':
        return IconFacebook;
      case 'twitter':
        return IconTwitter;
      case 'instagram':
        return IconInstagram;
      case 'youtube':
        return IconYoutube;
      default:
        return '';
    }
  }, [type_social]);

  return (
    <S.Container
      type_social={type_social}
      is_gained_followers={is_gained_followers}
    >
      <header>
        <h1>{title}</h1>
        <img src={icon_social} alt={type_social} />
      </header>

      <footer>
        <h5>{total_gained}</h5>
        <div>
          {is_gained_followers ? (
            <img
              src={IconUp}
              alt="Seta para cima, indicando rendimento de ganhadores positivo"
            />
          ) : (
            <img
              src={IconDown}
              alt="Seta para baixo, indicando rendimento de ganhadores negativo"
            />
          )}
          <p>{qnt_percentage}%</p>
        </div>
      </footer>
    </S.Container>
  );
}
