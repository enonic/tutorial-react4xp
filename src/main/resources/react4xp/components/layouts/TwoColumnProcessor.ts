import type {LayoutComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';

export const layoutProcessor: LayoutComponentProcessorFunction<'com.enonic.app.hmdb:2-column'> = ({component,}) => {
    const { regions } = component;

    return {
        props: {
                path: '/',
                type: 'layout',
                descriptor: 'com.enonic.app.hmdb:2-column',
            regions: '',
                left: regions.left,
                right: regions.right,


        },
    };
};