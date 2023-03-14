import React, { useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

import './style.scss';

export const Codemirror = ({ id }: { id: string }) => {
    const [code, setCode] = useState('console.log(\'hello world!\');');
    const [theme, setTheme] = useState('dark');

    const runHendler = () => {
        let time = performance.now();

        // eslint-disable-next-line no-eval
        eval(code);

        time = performance.now() - time;
        console.log('Время выполнения = ', time);
    };

    const copyHendler = () => {
        navigator.clipboard.writeText(code);
    };

    const pasteHendler = () => {
        navigator.clipboard.readText().then(cliptext => {
            setCode(cliptext);
        });
    };

    return (
        <div className="codeWrapper">
            <div className="controlPanelWrapper">
                <div className="buttonGroups">
                    <button onClick={runHendler}>RUN!</button>
                    <button onClick={copyHendler}>COPY</button>
                    <button onClick={pasteHendler}>PASTE</button>
                </div>
                <div className="radioButtonGroups">
                    <span>Theme:</span>
                    <span>
                        <input
                            id={`dark-${id}`}
                            type="radio"
                            name={`dark-${id}`}
                            value="dark"
                            checked={theme === 'dark'}
                            onClick={() => setTheme('dark')}
                        />
                        <label htmlFor={`dark-${id}`}>Dark</label>
                    </span>
                    <span>
                        <input
                            id={`light-${id}`}
                            type="radio"
                            name={`light-${id}`}
                            value="light"
                            checked={theme === 'light'}
                            onClick={() => setTheme('light')}
                        />
                        <label htmlFor={`light-${id}`}>Light</label>
                    </span>
                </div>
            </div>

            <CodeMirror
                value={code}
                height="400px"
                theme={theme as 'dark' | 'light'}
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => {
                    setCode(value);
                }}
            />
        </div>
    );
};