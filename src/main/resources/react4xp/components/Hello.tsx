import type {HelloProps} from '/types/HelloProps';
import * as React from 'react';

export const Hello = ({title, text}: HelloProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};
