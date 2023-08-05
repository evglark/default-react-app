import React, { useEffect, useState } from 'react';

const THEME = ['DARK', 'LIGHT'];

export const Header = () => {
  const [theme, setTheme] = useState(THEME[0]);

  const onToggleTheme = () => {
    setTheme(currentTheme => currentTheme === THEME[0] ? THEME[1] : THEME[0]);
  };

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', theme.toLowerCase());
  }, [theme]);

  return (
    <header className="navbar navbar-expand-lg bd-navbar sticky-top">
      <nav className="container-xxl bd-gutter flex-row-reverse">
        <div className="form-check form-switch">
          <input
            type="checkbox"
            id="themeSwitcher"
            className="form-check-input"
            role="switch"
            onChange={onToggleTheme}
            checked={theme === THEME[0]}
          />
          <label
            className="form-check-label"
            htmlFor="themeSwitcher"
          >
            Checked switch checkbox input
          </label>
        </div>
      </nav>
    </header>
  );
};
