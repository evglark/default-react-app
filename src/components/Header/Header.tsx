import React, { useEffect, useState } from 'react';

enum ETHEME {
    DARK,
    LIGHT,
}

export const Header = () => {
    const [theme, setTheme] = useState(ETHEME.DARK);

    const onToggleTheme = () => {
        setTheme(theme => theme === 0 ? ETHEME.LIGHT : ETHEME.DARK);
    };

    useEffect(() => {
        document.getElementsByTagName('html')[0].dataset.bsTheme = ETHEME[theme].toLowerCase();
    }, [theme]);

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
                        checked={theme === ETHEME.DARK}
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
