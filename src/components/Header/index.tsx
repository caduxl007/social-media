import * as S from './styles';
import { SwitchButtonTheme } from './SwitchButtonTheme';

interface HeaderProps {
  total_followers: string;
}

export function Header({ total_followers }: HeaderProps) {
  return (
    <S.Container>
      <S.ContentHeader>
        <div>
          <h2>Social Media Dashboard</h2>
          <p>Total Followers: {total_followers}</p>
        </div>

        <div>
          <p>Dark Mode</p>
          <SwitchButtonTheme />
        </div>
      </S.ContentHeader>
    </S.Container>
  );
}
