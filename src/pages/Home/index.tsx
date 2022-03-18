import { CardFollowers, Header } from 'components';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header />
      <main>
        <S.ContentCardsFollowers>
          <CardFollowers
            is_gained_followers={true}
            username="@caduxl"
            today_followers="1000"
            total_followers="11052"
            type_social="youtube"
          />
        </S.ContentCardsFollowers>
      </main>
    </S.Container>
  );
}
