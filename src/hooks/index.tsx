import { ReactNode } from 'react';
import { ThemeProvider } from './useTheme';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default AppProvider;
