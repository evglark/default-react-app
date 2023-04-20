import React, { useState } from 'react';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Input } from '../Input';

import { ObjectBlock } from './ObjectBlock';
import './style.scss';

export const JsonForm = () => {
    const [data, setData] = useState({
        name: '',
        obj: { a: 'AA', b: 'BB' },
        obj1: { arr: ['AA', 'BB'] },
        arr: [1, 2, 3],
        arr1: [{ a: 'a', b: 'b' }],
        arr2: [[1, 2, 3], [1, 2, 3]],
    });

    const resetJson = async () => {
        const json = require('./users.json');
        setData(json);
    };

    const addNewField = () => {
        console.log(1);
    };

    const changeValue = (e: React.FormEvent) => {
        console.log(0, e);
    };

    const renderJson = (json: any) => {
        const renderArray = (array: any[]) => (
            <div className="array-block">
                {array.map((arrayElement: any, i: number) => {
                    if (Array.isArray(arrayElement)) {
                        return (
                            <React.Fragment key={`array-array-[${i}]-${JSON.stringify(arrayElement)}`}>
                                <ObjectBlock el={arrayElement}>{renderJson(arrayElement)}</ObjectBlock>
                            </React.Fragment>
                        );
                    }

                    if (typeof arrayElement === 'object') {
                        return (
                            <React.Fragment key={`array-object-${JSON.stringify(arrayElement)}`}>
                                <ObjectBlock el={arrayElement}>{renderJson(arrayElement)}</ObjectBlock>
                            </React.Fragment>
                        );
                    }

                    return (
                        <React.Fragment key={arrayElement + i}>
                            <Input value={arrayElement} onChangeValue={changeValue} />
                        </React.Fragment>
                    );
                })}
            </div>
        );

        const renderObject = (object: any) => Object.keys(object).map((el, i) => {
            if (Array.isArray(object[el])) {
                return (
                    <React.Fragment key={`object-array-${JSON.stringify(object[el])}`}>
                        <ObjectBlock el={object[el]} name={el}>{renderJson(object[el])}</ObjectBlock>
                    </React.Fragment>
                );
            }

            if (typeof object[el] === 'object') {
                return (
                    <React.Fragment key={`object-object-${JSON.stringify(object[el])}`}>
                        <ObjectBlock el={object[el]} name={el}>{renderJson(object[el])}</ObjectBlock>
                    </React.Fragment>
                );
            };

            return (
                <React.Fragment key={el + i}>
                    <Input name={el} value={object[el]} onChangeValue={changeValue} />
                </React.Fragment>
            );
        });

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
            {renderJson(data)}
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
