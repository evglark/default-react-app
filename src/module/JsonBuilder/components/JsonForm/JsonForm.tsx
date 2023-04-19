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

    const renderJson = (json: any) => {
        const renderArray = (array: any[]) => {
            return (
                <div className="array-block">
                    {array.map((arrayElement: any, i: number) => {
                        if (Array.isArray(arrayElement)) {
                            return <ObjectBlock el={'[]'}>{renderJson(arrayElement)}</ObjectBlock>;
                        }

                        if (typeof arrayElement === 'object') {
                            return <ObjectBlock el={'{} ' + arrayElement}>{renderJson(arrayElement)}</ObjectBlock>;
                        }

                        return <Input value={arrayElement} onChangeName={changeName} key={arrayElement + i} />;
                    })}
                </div>
            );
        };

        const renderObject = (object: any) => {
            return Object.keys(object).map((el, i) => {
                if (Array.isArray(object[el])) {
                    return <ObjectBlock el={'[] ' + el}>{renderJson(object[el])}</ObjectBlock>;
                }

                if (typeof object[el] === 'object') {
                    return <ObjectBlock el={'{} ' + el}>{renderJson(object[el])}</ObjectBlock>;
                };

                return <Input name={el} value={object[el]} onChangeName={changeName} key={el + i} />;
            });
        };

        if (Array.isArray(json)) return renderArray(json);
        if (typeof json === 'object') return renderObject(json);
    };

    return (
        <div className="jsonForm">
            <h1 className="mb-3">JSON Builder</h1>
            <div className="d-flex flex-row-reverse">
                <button type="button" className="mb-3 btn btn-primary" onClick={resetJson}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                </button>
            </div>
            {renderJson(JSON)}
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
