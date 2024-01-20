import { useContext } from 'react';

import { ThemeContext } from 'Root/contexts';

export const useTheme = () => {
  const themes = ['light', 'dark'];
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const setTheme = (val: string) => {
    if (themes.includes(val)) {
      context.setTheme(val);
    } else {
      context.setTheme('light');
      throw new Error(`Invalid theme: ${val}`);
    }
  };

  return ({ theme: context.theme, setTheme });
};
