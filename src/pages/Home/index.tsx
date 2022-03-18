import { CardOverviewToday, Header } from 'components';
import { SectionCardsFollowers } from 'components/templates';
import { details_cards_overview } from 'utils/mocks';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header />
      <main>
        <SectionCardsFollowers />
        <S.ContentCardsOverviewToday>
          <h2>Overview - Today</h2>
          <div>
            {details_cards_overview.map((data) => (
              <CardOverviewToday
                key={data.id}
                is_gained={data.is_gained}
                title={data.title}
                total_gained={data.total_gained}
                qnt_percentage={data.qnt_percentage}
                type_social={data.type_social}
              />
            ))}
          </div>
        </S.ContentCardsOverviewToday>
      </main>
    </S.Container>
  );
}
