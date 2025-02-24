import type {LayoutComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';

export const layoutProcessor: LayoutComponentProcessorFunction<'com.enonic.app.hmdb:2-column'> = ({component}) => {
    const { regions } = component;

    if (!regions.left) {
        regions.left = {
            name: "left",
            components: []
        }
    }

    if (!regions.right) {
        regions.right = {
            name: "right",
            components: []
        }
    }

    return {
        props: {
            regions: regions,



        },
    };
};