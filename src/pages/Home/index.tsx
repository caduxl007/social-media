import { CardFollowers, CardOverviewToday, Header } from 'components';
import { details_cards_followers, details_cards_overview } from 'utils/mocks';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header />
      <main>
        <S.ContentCardsFollowers>
          {details_cards_followers.map((data) => (
            <CardFollowers
              key={data.id}
              is_gained_followers={data.is_gained_followers}
              username={data.username}
              today_followers={data.today_followers}
              total_followers={data.total_followers}
              type_social={data.type_social}
            />
          ))}
        </S.ContentCardsFollowers>

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
