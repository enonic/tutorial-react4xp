import type { PageComponentProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';
import {assetUrl} from '/lib/enonic/asset';
import {pageUrl} from "/lib/xp/portal";


export const pageProcessor: PageComponentProcessorFunction<'com.enonic.app.hmdb:main'> = ({ component }) => {
    const regions = component?.regions || {};
    const url = assetUrl({path: 'images/Icon-XP.svg'});

    return {
        props: {
            page: {
                type: 'page',
                path: '/',
                config: component.config || {},
                descriptor: 'com.enonic.app.hmdb:main',
                regions,
            },
            url,
        },
    };
};
