import { FC, ReactNode } from 'react';

import { ThemeProvider } from './ThemeProvider';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
