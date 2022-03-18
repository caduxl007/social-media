import { Header } from 'components';
import {
  SectionCardsFollowers,
  SectionCardsOverviewToday
} from 'components/templates';
import { useEffect, useState } from 'react';
import * as S from './styles';

export function Home() {
  const [directionDrapDrop, setDirectionDrapDrop] = useState('horizontal');

  useEffect(() => {
    const largura = window.innerWidth;

    if (largura > 500) {
      setDirectionDrapDrop('horizontal');
    } else {
      setDirectionDrapDrop('vertical');
    }
  }, []);

  return (
    <S.Container>
      <Header total_followers="23,114" />
      <main>
        <SectionCardsFollowers directionDrapDrop={directionDrapDrop} />
        <SectionCardsOverviewToday directionDrapDrop={directionDrapDrop} />
      </main>
    </S.Container>
  );
}
