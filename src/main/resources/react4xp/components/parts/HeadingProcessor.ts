import {PartComponent} from '@enonic-types/core';
import type {ComponentProcessor} from '@enonic-types/lib-react4xp/DataFetcher';

export const headingProcessor: ComponentProcessor<'com.enonic.app.hmdb:heading'> = (params) => {
    const component = params.component as PartComponent;
    const heading = component.config?.heading || params.content.displayName;

    return {
        heading: heading,
    };

};
