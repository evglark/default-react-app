/* eslint-disable array-callback-return */
import React, { useState } from 'react';

import { Input } from '../components/Input';

export const JsonBuilder = () => {
    const [JSON, setJSON] = useState({ name: '' });

    const addNewField = () => {
        setJSON((json) => {
            const namesCount = Object.keys(json).filter(el => el.slice(0, 3)).length;

            if (namesCount) {
                return { ...json, ['name ' + (namesCount + 1).toString()]: '' };
            }

            return { ...json, name: '' };
        });
    };

    const changeName = () => {
        console.log(0);
    };

    const x = {
        a: 'one',
        ab: {
            a: 'A',
            b: 'B',
            c: {
                aaa: 'AAA',
                bbb: 999,
                ccc: 'ccc6',
            },
        },
        abc: 1,
    };

    const renderJson = () => {
        const readObject = (json: any) =>
            Object.keys(json).map((el, i) => {
                if (typeof json[el] === 'string' || typeof json[el] === 'number') {
                    return <Input name={el} onChangeName={changeName} key={el+i} />;
                };

                if (typeof json[el] === 'object') {
                    const style = { marginLeft: 32 };

                    return (
                        <div id={el} key={el+i} >
                            <span className="input-group-text mb-3">{`${el}`}</span>
                            <div style={style}>
                                {readObject(json[el])}
                                <button
                                    type="button"
                                    className="btn btn-primary mb-3"
                                    onClick={addNewField}
                                >
                                    Add field
                                </button>
                            </div>
                        </div>
                    );
                };
            });

        return readObject(x);
    };

    return (
        <div className="jsonBuilder" style={{ color: 'white' }}>
            <h1>JSON Builder</h1>
            {renderJson()}
            <button
                type="button"
                className="btn btn-primary"
                onClick={addNewField}
            >
                Add field
            </button>
        </div>
    );
};
