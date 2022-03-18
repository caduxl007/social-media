import { CardFollowers, CardOverviewToday, Header } from 'components';
import { details_cards_followers } from 'utils/mocks';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header />
      <main>
        <S.ContentCardsFollowers>
          {details_cards_followers.map((data) => (
            <CardFollowers
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
            {details_cards_followers.map((data) => (
              <CardOverviewToday
                is_gained_followers={data.is_gained_followers}
                title={data.username}
                total_gained={data.today_followers}
                qnt_percentage={data.total_followers}
                type_social={data.type_social}
              />
            ))}
          </div>
        </S.ContentCardsOverviewToday>
      </main>
    </S.Container>
  );
}
