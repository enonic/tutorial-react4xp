import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {assetUrl} from '/lib/enonic/asset';
import {PageComponent} from "@enonic-types/core";


export const pageProcessor: ComponentProcessorFunction<'com.enonic.app.hmdb:main'> = (props) => {
    const component = props.component as PageComponent;
    const regions = component?.regions || {};
    const url = assetUrl({path: 'images/Icon-XP.svg'});

    return {
        page: {
            type: 'page',
            path: '/',
            config: component.config || {},
            descriptor: 'com.enonic.app.hmdb:main',
            regions,
        },
        url,
    };
};
