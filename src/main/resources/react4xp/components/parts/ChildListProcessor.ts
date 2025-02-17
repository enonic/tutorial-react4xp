import type { PartComponentProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';
import {getChildren} from '/lib/xp/content';


export const childListProcessor: PartComponentProcessorFunction<'com.enonic.app.hmdb:child-list'> = (params) => {



const sortOrder: any = params.component.config.sorting;
// Returns the children of specified path.
    const result = getChildren({
        key: params.content._id,
        start: 0,
        count: 99,
        sort: 'sortOrder'
    });







    // Assuming `content.page.regions.main.components` is an array of components


    return {
        props: {
            path: '/',
            type: 'part',
            descriptor: 'com.enonic.app.hmdb:child-list',
            names: result.hits.map((content) => content.displayName),
            paths: result.hits.map((content) => params.request.path + '/' + content._name),
            total: result.total,
            result: result,
            component: params.component,
            content: params.content,
            params: params,



        },
    };

};
