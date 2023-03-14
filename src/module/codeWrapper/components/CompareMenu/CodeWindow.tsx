import React, { useState } from 'react';
import { CSSProperties } from 'styled-components';

import { Codemirror } from '../codemirrorWrapper';

import './style.scss';

export const CodeWindow = ({ id: String = '' }) => {
    const [close, setClose] = useState(false);
    const [hide, setHide] = useState(false);

    return (
        <div className="codeWindow" style={(close ? { display: 'none' } : {}) as CSSProperties}>
            <div className="codeHeader">
                <button onClick={() => setClose(true)}>x</button>
                <button onClick={() => setHide(c => !c)}>_</button>
            </div>
            <div className="codeContent" style={(hide ? { display: 'none' } : {}) as CSSProperties}>
                <Codemirror id={id} />
            </div>
        </div>
    );
};