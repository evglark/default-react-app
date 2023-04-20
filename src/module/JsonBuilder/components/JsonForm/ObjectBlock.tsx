import React from 'react';

import './style.scss';

interface IProps {
    el: any;
    name?: string;
    children: React.ReactNode;
}

export const ObjectBlock = (props: IProps) => {
    const { el, name, children } = props;
    const type = Array.isArray(el) ? '[]' : typeof el === 'object' ? '{}' : '';
    const typeName = Array.isArray(el) ? 'Array' : typeof el === 'object' ? 'Object' : '';

    return (
        <div className="objectblock-compoentn">
            <div className="input-group mb-3">
                <span className="input-group-text">
                    {`${type}`}
                </span>
                <div className="form-control input-group-text">
                    {`${name ? name : typeName}`}
                </div>
            </div>
            <div className="objectBlock">
                {children}
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                >
                    Add field
                </button>
            </div>
        </div>
    );
};
