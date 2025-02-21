import type { PartComponentProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';
import { getChildren } from '/lib/xp/content';

export const childListProcessor: PartComponentProcessorFunction<'com.enonic.app.hmdb:child-list'> = (params) => {
    const sortOrder: any = params.component.config.sorting;

    const result = getChildren({
        key: params.content._id,
        start: 0,
        count: 99,
        sort: sortOrder
    });

    return {
        props: {
            names: result.hits.map((content) => content.displayName),
            paths: result.hits.map((content) => params.request.path + '/' + content._name),
        },
    };
};
