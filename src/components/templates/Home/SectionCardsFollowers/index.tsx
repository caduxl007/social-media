import { CardFollowers } from 'components';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import { details_cards_followers } from 'utils/mocks';
import { usePersistedState } from 'utils/usePersistedState';
import * as S from './styles';

interface SectionProps {
  directionDrapDrop: string;
}

export function SectionCardsFollowers({ directionDrapDrop }: SectionProps) {
  const [followers, setCardFollowers] = usePersistedState(
    'followers',
    details_cards_followers,
  );

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const items = Array.from(followers);
    const [reordereItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordereItem);

    setCardFollowers(items);
  }

  return (
    <S.Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable
          droppableId="followers"
          direction={
            directionDrapDrop === 'horizontal' ? 'horizontal' : 'vertical'
          }
        >
          {(provided) => (
            <ul
              className="followers"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {followers.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={String(data.id)}
                  index={index}
                >
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <CardFollowers
                        key={data.id}
                        is_gained_followers={data.is_gained_followers}
                        username={data.username}
                        today_followers={data.today_followers}
                        total_followers={data.total_followers}
                        type_social={data.type_social}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </S.Container>
  );
}
