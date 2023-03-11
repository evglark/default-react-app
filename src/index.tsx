/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ThemeProvider theme={{}}>
        <React.StrictMode>
            1
        </React.StrictMode>
    </ThemeProvider>
);
