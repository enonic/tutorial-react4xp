import {Region, ComponentProps, ProcessedPage} from '@enonic/react-components';
import React from 'react'

export const Page = ({component, meta}: ComponentProps) => {
    const regions = (component as ProcessedPage).regions;
    return (
        <Region data={regions.main.components} meta={meta} name="main"/>
    );
};
