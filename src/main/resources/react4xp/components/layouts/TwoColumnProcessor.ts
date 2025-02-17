import type { LayoutComponentProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';

export const layoutProcessor: LayoutComponentProcessorFunction<'com.enonic.app.hmdb:2-column'> = ({ content, component, }) => {
    const region = component?.regions|| {};

    const { regions } = component;

    return {
        props: {
                path: '/',
                type: 'layout',
                descriptor: 'com.enonic.app.hmdb:2-column',
                config: component.config || {},
                region,
                content: content || {},
                regions: {},
                left: regions.left,
                right: regions.right,


                
        },
    };
};