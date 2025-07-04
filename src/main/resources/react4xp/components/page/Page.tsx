import {Region, ComponentProps, PageData} from '@enonic/react-components';
import React from 'react'

export const Page = ({component, meta}: ComponentProps<PageData>) => {

    return (
        <Region data={component.regions.main.components} meta={meta} name="main"/>
    );
};
