import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {assetUrl} from '/lib/enonic/asset';

export const commonProcessor: ComponentProcessorFunction<'com.enonic.app.hmdb:main'> = (props) => {

    const url = assetUrl({path: 'images/React4XP.svg'});

    return {
        url
    };
};
