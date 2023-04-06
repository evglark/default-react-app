/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './Router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
);
