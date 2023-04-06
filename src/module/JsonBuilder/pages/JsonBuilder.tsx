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
                console.log(0, typeof json[el], json[el]);
                if (typeof json[el] === 'string' || typeof json[el] === 'number') {
                    return <div id={el} key={el+i}>{`${el}: ${json[el]}`}</div>;
                };

                if (typeof json[el] === 'object') {
                    const style = { marginLeft: 16 };

                    return (
                        <div id={el} key={el+i}>
                            {`${el}`}<div style={style}>{readObject(json[el])}</div>
                        </div>
                    );
                };
            });

        return readObject(x);
    };

    return (
        <div className="jsonBuilder" style={{ color: 'white' }}>
            <h1>JSON Builder</h1>
            {/* {Object.keys(JSON).map((el, i) => (
                <Input name={el} onChangeName={changeName} key={el+i} />
            ))} */}

            {renderJson()}

            <br/>
            <br/>
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
