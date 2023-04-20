import React, { useEffect, useState } from 'react';

import { useOnClickOutside } from '../../../../hooks/useOnClickOutside.js';

import './style.scss';

interface IProps {
    name?: string;
    value?: string | number;
    onChangeValue: (e: React.FormEvent) => void;
}

export const Input = (props: IProps) => {
    const { name, value, onChangeValue } = props;
    const [editMode, setEditMode] = useState(false);
	const { ref, clickdOutside, setClickOutside } = useOnClickOutside();

    const onToggleEditMode = () => {
        setEditMode((m) => !m);
    };

    useEffect(() => {
        if (clickdOutside) {
            onToggleEditMode();
            setClickOutside(false);
        }
    }, [clickdOutside]);

    useEffect(() => {
        if (editMode) {
            // @ts-ignore
            ref?.current?.focus();
        }
    }, [editMode]);

    return (
        <div className="input-component">
            <div className="input-group mb-3">
                {name && (
                    !editMode ? (
                        <span
                            id={`label-${name}`}
                            className="input-group-text lable-block cursor-pointer"
                            onClick={onToggleEditMode}
                        >
                            {name}
                        </span>
                    ) : (
                        <input
                            type="text"
                            id={`label-${name}`}
                            aria-label="input-key"
                            className="form-control lable-block"
                            ref={ref}
                        />
                    )
                )}
                <input
                    type="text"
                    className="form-control"
                    aria-label="input-value"
                    aria-describedby={`input-${name}`}
                    onChange={onChangeValue}
                    value={value}
                />
            </div>
        </div>
    );
};
