/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './Router';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router />
);
