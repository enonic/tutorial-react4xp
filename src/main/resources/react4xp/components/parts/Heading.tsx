import React from 'react';
import type {ComponentProps} from '@enonic/react-components';

export const Heading = ({data}: ComponentProps) => {

    return <h1>{data.heading as string}</h1>
};
