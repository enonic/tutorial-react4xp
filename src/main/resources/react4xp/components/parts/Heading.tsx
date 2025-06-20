import React from 'react';
import type {PartProps} from '@enonic/react-components';

export const Heading = ({data}: PartProps) => {

    return <h1>{data.heading as string}</h1>
};
