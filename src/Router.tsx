import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ComparePage } from './module/codeWrapper';

export const Router = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div>header</div>
                <Routes>
                    <Route path="/" element={<ComparePage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};