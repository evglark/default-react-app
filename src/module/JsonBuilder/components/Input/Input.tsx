// eslint-disable-next-line @typescript-eslint/no-redeclare
import React, { useEffect, useState } from 'react';

import { useOnClickOutside } from '../../../../hooks/useonClickOutside';
import './style.scss';

interface IProps {
    name: string;
    onChangeName: () => void;
}

export const Input = (props: IProps) => {
    const { name, onChangeName } = props;
    const [editMode, setEditMode] = useState(false);
	const { ref, clickdOutside } = useOnClickOutside(false);

    const onToggleEditMode = () => {
        setEditMode((m) => !m);
    };

    useEffect(() => {
        if (editMode) onToggleEditMode();
    }, [clickdOutside]);

    return (
        <div className="input-component">
            <div className="input-group mb-3">
                {!editMode ? (
                    <span id={`label-${name}`} className="input-group-text lable-block" onClick={onToggleEditMode}>
                        {name}
                    </span>
                ) : (
                    <input
                        type="text"
                        id={`label-${name}`}
                        aria-label="input-key"
                        className="form-control lable-block"
                        onChange={onChangeName}
                        ref={ref}
                    />
                )}
                <input
                    type="text"
                    className="form-control"
                    aria-label="input-value"
                    aria-describedby={`input-${name}`}
                />
            </div>
        </div>
    );
};
