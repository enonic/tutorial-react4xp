import React from 'react';
import { Part } from '@enonic/react-components';


export const Heading = (props: any) => {

const { componentRegistry, ...partProps } = props;
    return  <Part {...partProps}>
                <h1>{props.heading}</h1>
            </Part>
};
