import React from 'react';

import { Input } from '../components/Input';

export const JsonBuilder = () => {
    return (
        <div className="jsonBuilder">
            <h1>JSON Builder</h1>
            <Input name="name" />
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
    );
};
