import { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from 'Root/components/Header';
import { useTheme } from 'Root/hooks';
import { Init } from 'Root/modules/init';

import './style.less';

export const Router = () => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    document.body.classList.add(`${theme}-mode`);

    return () => {
      document.body.classList.remove(`${theme}-mode`);
    };
  }, [theme]);

  return (
    <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/two" element={<div>2</div>} />
          </Routes>
        </main>
    </BrowserRouter>
  );
};
