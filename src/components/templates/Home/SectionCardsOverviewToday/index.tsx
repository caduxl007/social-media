import { CardOverviewToday } from 'components';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import { details_cards_overview } from 'utils/mocks';
import { usePersistedState } from 'utils/usePersistedState';
import * as S from './styles';

interface SectionProps {
  directionDrapDrop: string;
}

export function SectionCardsOverviewToday({ directionDrapDrop }: SectionProps) {
  const [overviews, setCardOverviews] = usePersistedState(
    'overview',
    details_cards_overview,
  );

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const items = Array.from(overviews);
    const [reordereItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordereItem);

    setCardOverviews(items);
  }

  return (
    <S.Container>
      <h2>Overview - Today</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable
          droppableId="overview"
          direction={
            directionDrapDrop === 'horizontal' ? 'horizontal' : 'vertical'
          }
        >
          {(provided) => (
            <ul
              className="overview"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {overviews.map((data, index) => (
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
                      {' '}
                      <CardOverviewToday
                        key={data.id}
                        is_gained={data.is_gained}
                        title={data.title}
                        total_gained={data.total_gained}
                        qnt_percentage={data.qnt_percentage}
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
