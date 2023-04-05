/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ThemeProvider theme={{}}>
        <React.StrictMode>
            <Router/>
        </React.StrictMode>
    </ThemeProvider>
);
