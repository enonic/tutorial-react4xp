import {assetUrl} from '/lib/enonic/asset';

...

export function get(request: Request): Response {
    const url = assetUrl({path: 'images/React4XP.svg'});
...

    const props: AppProps = {
        component,
        url
    }
...