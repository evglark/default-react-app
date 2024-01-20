import React from 'react';
import ReactDOM from 'react-dom/client';

import { Providers } from './providers';
import { Router } from './router';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
);
