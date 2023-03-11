import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
    const main = <div>main</div>;

    return (
        <div className="App">
            <BrowserRouter>
                <div>header</div>
                <Routes>
                    <Route path="/" element={main} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};