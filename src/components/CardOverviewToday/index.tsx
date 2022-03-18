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

interface CardOverviewProps {
  title: string;
  id: number;
  index: number;
  type_social: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  total_gained: string;
  qnt_percentage: string;
  is_gained: boolean;
}

export function CardOverviewToday({
  title,
  type_social,
  total_gained,
  qnt_percentage,
  is_gained,
  id,
  index,
  ...rest
}: CardOverviewProps) {
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
          is_gained={is_gained}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <header>
            <h1>{title}</h1>
            <img src={icon_social} alt={type_social} />
          </header>

          <footer>
            <h5>{total_gained}</h5>
            <div>
              {is_gained ? (
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
      )}
    </Draggable>
  );
}
