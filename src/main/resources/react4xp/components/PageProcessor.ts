import {getSite, pageUrl} from '/lib/xp/portal';
import {PageComponent} from "@enonic-types/core";
import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';

export const pageProcessor: ComponentProcessorFunction<'com.enonic.app.hmdb:main'> = (props) => {
    const component = props.component as PageComponent;
    const regions = component?.regions || {};
    const site = getSite();

    const baseUrl = pageUrl({path: site._path});
    const parentSegment = props.request.path.split('/').slice(0, -1).join('/');
    const parentBaseSegment = baseUrl.split('/').slice(0, -1).join('/');

    return {
        page: {
            type: 'page',
            path: '/',
            config: component.config || {},
            descriptor: 'com.enonic.app.hmdb:main',
            regions
        },
        ...(parentSegment !== parentBaseSegment ? {parent: parentSegment} : {})

    };
};
