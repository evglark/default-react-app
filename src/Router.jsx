import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { ApplicationPage } from './modules/InitApplication';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ApplicationPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
