import * as S from './styles';
import { SwitchButtonTheme } from './SwitchButtonTheme';

export function Header() {

  return (
    <S.Container>
      <S.ContentHeader>
        <div>
          <h2>Social Media Dashboard</h2>
          <p>Total Followers: 23,004</p>
        </div>

        <div>
          <p>Dark Mode</p>
          <SwitchButtonTheme />
        </div>
      </S.ContentHeader>
    </S.Container>
  );
}
