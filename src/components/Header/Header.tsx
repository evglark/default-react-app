import React, { useState } from 'react';

export const Header = () => {
    const [theme, setTheme] = useState('dark');

    const onToggleTheme = () => {
        const { bsTheme } = document.getElementsByTagName('html')[0].dataset;
        const newTheme = bsTheme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);
        document.getElementsByTagName('html')[0].dataset.bsTheme = newTheme;
    };

    return (
        <header className="header-compoentn navbar navbar-expand-lg bd-navbar sticky-top">
            <nav className="container-xxl bd-gutter flex-row-reverse">
                <div className="form-check form-switch">
                    <input
                        type="checkbox"
                        id="themeSwitcher"
                        className="form-check-input"
                        role="switch"
                        onChange={onToggleTheme}
                        checked={theme === 'dark'}
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
