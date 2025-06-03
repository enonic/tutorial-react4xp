import {assetUrl} from '/lib/enonic/asset';
import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';

export const commonProcessor: ComponentProcessorFunction<'com.enonic.app.hmdb:main'> = (props) => {

    const logoUrl = assetUrl({path: 'images/React4XP.svg'});

    return {
        logoUrl
    };
};
