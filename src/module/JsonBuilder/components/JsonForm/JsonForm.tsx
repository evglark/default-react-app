import React, { useState } from 'react';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Input } from '../Input';

import { ObjectBlock } from './ObjectBlock';
import './style.scss';

export const JsonForm = () => {
    const [JSON, setJSON] = useState({
        name: '',
        obj: { a: 'AA', b: 'BB' },
        obj1: { arr: ['AA', 'BB'] },
        arr: [1, 2, 3],
        arr1: [{ a: 'a', b: 'b' }],
        arr2: [[1, 2, 3], [1, 2, 3]],
    });

    const resetJson = async () => {
        const data = require('./users.json');
        setJSON(data);
    };

    const addNewField = () => {
        console.log(1);
    };

    const changeName = () => {
        console.log(0);
    };

    const renderJson = () => {
        const renderArray = (array: any[]) => {
            return (
                <div className="array-block">
                    {array.map((arrayElement: any, i: number) => {
                        if (Array.isArray(arrayElement)) {
                            return <ObjectBlock el={'[]'}>{renderArray(arrayElement)}</ObjectBlock>;
                        }

                        if (typeof arrayElement === 'object') {
                            return <ObjectBlock el={'{} ' + arrayElement}>{renderObject(arrayElement)}</ObjectBlock>;
                        }

                        return <Input value={arrayElement} onChangeName={changeName} key={arrayElement + i} />;
                    })}
                </div>
            );
        };

        const renderObject = (json: any) => {
            return Object.keys(json).map((el, i) => {
                if (Array.isArray(json[el])) {
                    return <ObjectBlock el={'[] ' + el}>{renderArray(json[el])}</ObjectBlock>;
                }

                if (typeof json[el] === 'object') {
                    return <ObjectBlock el={'{} ' + el}>{renderObject(json[el])}</ObjectBlock>;
                };

                return <Input name={el} value={json[el]} onChangeName={changeName} key={el + i} />;
            });
        };

        return renderObject(JSON);
    };

    return (
        <div className="jsonForm">
            <h1 className="mb-3">JSON Builder</h1>
            <div className="d-flex flex-row-reverse">
                <button type="button" className="mb-3 btn btn-primary" onClick={resetJson}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                </button>
            </div>
            {renderJson()}
            <button
                type="button"
                className="btn btn-primary"
                onClick={addNewField}
            >
                Add field
            </button>
            <div className="d-flex flex-row-reverse">
                <button type="button" className="btn btn-primary" onClick={addNewField}>
                    Download JSON
                </button>
            </div>
        </div>
    );
};
