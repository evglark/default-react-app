import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { JsonBuilder } from './module/JsonBuilder';

export const Router = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div>header</div>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<JsonBuilder/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};