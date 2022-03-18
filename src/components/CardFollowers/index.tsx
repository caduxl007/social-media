import {
  IconDown,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconUp,
  IconYoutube
} from 'assets/icons';
import { useMemo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as S from './styles';

interface CardFollowersProps {
  id: number;
  index: number;
  username: string;
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  total_followers: string;
  today_followers: string;
  is_gained_followers: boolean;
}

export function CardFollowers({
  id,
  index,
  username,
  type_social,
  total_followers,
  today_followers,
  is_gained_followers,
  ...rest
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
    <Draggable key={id} draggableId={String(id)} index={index}>
      {(provided) => (
        <S.Container
          type_social={type_social}
          is_gained_followers={is_gained_followers}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          {...rest}
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
      )}
    </Draggable>
  );
}
