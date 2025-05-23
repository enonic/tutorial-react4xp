import {render} from '/lib/enonic/react4xp';
import {getComponent} from '/lib/xp/portal';
import type {Enonic} from '@enonic/js-utils/types/Request';
import {toStr} from './toStr';


export function get(request: Enonic.Xp.Http.Request) {

    const component = getComponent();
    log.debug('component:%s', toStr(component));

    const props = {};

    const response = render(
        component,
        props,
        request,
        {
            ...
        }
    );

    return response;
}
