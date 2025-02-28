import type {PageComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';


export const pageProcessor: PageComponentProcessorFunction<'com.enonic.app.hmdb:main'> = ({component}) => {
    const regions = component?.regions || {};
    return {
        props: {
            page: {
                type: 'page',
                path: '/',
                config: component.config || {},
                descriptor: 'com.enonic.app.hmdb:main',
                regions,
            },
        },
    };
};
