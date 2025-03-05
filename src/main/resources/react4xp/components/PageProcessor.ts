import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {PageComponent} from "@enonic-types/core";


export const pageProcessor: ComponentProcessorFunction<'com.enonic.app.hmdb:main'> = (props) => {
    const component = props.component as PageComponent;
    const regions = component?.regions || {};
    return {
        page: {
            type: 'page',
            path: '/',
            config: component.config || {},
            descriptor: 'com.enonic.app.hmdb:main',
            regions,
        }
    };
};
