import { useTheme } from 'hooks/useTheme';
import Switch from 'react-switch';

export function SwitchButtonTheme() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Switch
      width={40}
      height={20}
      checkedIcon={false}
      uncheckedIcon={false}
      checked={theme.title === 'light'}
      onChange={toggleTheme}
    />
  );
}
