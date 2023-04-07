/* eslint-disable array-callback-return */
import React, { useState } from 'react';

import { Input } from '../Input';

import { ObjectBlock } from './ObjectBlock';
import './style.scss';

export const JsonForm = () => {
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

    const renderJson = () => {
        const readObject = (json: any) =>
            Object.keys(json).map((el, i) => {
                if (Array.isArray(json[el])) {
                    return (
                        <React.Fragment key={el+i}>
                            <ObjectBlock el={el}>
                                {json[el].map((arrElement: any) =>
                                    typeof json[el] === 'object'
                                        ? <ObjectBlock el={el}>{readObject(json[el])}</ObjectBlock>
                                        : <Input value={arrElement} onChangeName={changeName} key={el+i} />,
                                )}
                            </ObjectBlock>
                        </React.Fragment>
                    );
                }

                if (typeof json[el] === 'object') {
                    return <ObjectBlock el={el}>{readObject(json[el])}</ObjectBlock>;
                };

                return <Input name={el} value={json[el]} onChangeName={changeName} key={el+i} />;
            });

        return readObject(JSON);
    };

    return (
        <div className="jsonForm">
            <h1 className="mb-3">JSON Builder</h1>
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
