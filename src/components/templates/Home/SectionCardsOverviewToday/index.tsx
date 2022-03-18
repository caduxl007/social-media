import { CardOverviewToday } from 'components';
import {
  DragDropContext, Droppable,
  DropResult
} from 'react-beautiful-dnd';
import { details_cards_overview } from 'utils/mocks';
import { usePersistedState } from 'utils/usePersistedState';
import * as S from './styles';

export function SectionCardsOverviewToday() {
  const [followers, setCardFollowers] = usePersistedState(
    'overview',
    details_cards_overview,
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
      <h2>Overview - Today</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="overview" direction="horizontal">
          {(provided) => (
            <ul
              className="overview"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {followers.map((data, index) => (
                <CardOverviewToday
                  key={data.id}
                  id={data.id}
                  index={index}
                  is_gained={data.is_gained}
                  title={data.title}
                  total_gained={data.total_gained}
                  qnt_percentage={data.qnt_percentage}
                  type_social={data.type_social}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </S.Container>
  );
}
