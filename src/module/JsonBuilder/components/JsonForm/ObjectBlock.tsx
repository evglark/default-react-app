import React from 'react';

import './style.scss';

interface IProps {
    el: string;
    children: React.ReactNode;
}

export const ObjectBlock = (props: IProps) => {
    const { el, children } = props;

    return (
        <div id={el} className="objectblock-compoentn">
            <span className="input-group-text mb-3">{`${el}`}</span>
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
