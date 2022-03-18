import { Header } from 'components';
import {
  SectionCardsFollowers,
  SectionCardsOverviewToday
} from 'components/templates';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header />
      <main>
        <SectionCardsFollowers />
        <SectionCardsOverviewToday />
      </main>
    </S.Container>
  );
}
