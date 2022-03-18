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
  username: string;
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  total_followers: string;
  today_followers: string;
  is_gained_followers: boolean;
}

export function CardFollowers({
  username,
  type_social,
  total_followers,
  today_followers,
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
      type_social="twitter"
      is_gained_followers={is_gained_followers}
    >
      <header>
        <img src={icon_social} alt={type_social} />

        <h1>{username}</h1>
      </header>

      <div>
        <h5>{total_followers}</h5>
        <p>{type_social === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}</p>
      </div>

      <footer>
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
        <p>{today_followers} Today</p>
      </footer>
    </S.Container>
  );
}
