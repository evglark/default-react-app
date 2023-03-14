import React, { useState } from 'react';

import { CodeWindow } from './CodeWindow';

import './style.scss';

export const CompareMenu = () => {
    const [count, setCount] = useState(2);

    return (
        <div className="compareMenu">
            <div className="buttonGroups">
                <button onClick={() => setCount(c => ++c)}>+</button>
            </div>
            <div className="compareWrapper">
                {[...Array(count).keys()].map((el) => (
                    <CodeWindow id={el.toString()} key={el + 'window'}/>
                ))}
            </div>
        </div>
    );
};