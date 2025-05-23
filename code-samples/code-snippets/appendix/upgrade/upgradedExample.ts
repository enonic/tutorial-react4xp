import {render} from '/lib/enonic/react4xp';
import {getComponent} from '/lib/xp/portal';
import {Request} from '@enonic-types/core';
import {toStr} from './toStr';


export function get(request: Request) {

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
