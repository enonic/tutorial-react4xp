import type {PartComponent} from '@enonic-types/core';

import {getComponent} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp';


declare global {
  interface XpPartMap {
    ['com.enonic.app.samples-react4xp:color']: {
      color: string
    };
  }
}


export function get(request) {

  const component = getComponent<PartComponent<'com.enonic.app.samples-react4xp:color'>>();
  const {color} = component.config;
  const props = { color };

  const response = render(
    component,
    props,
    request,
    {                               // <1>
        ssr: false,                 // <2>
        pageContributions: {        // <3>
            bodyEnd: `<script nonce="rAnd0m">console.log("The color of the thing is: ${color}");</script>`
        }
    }
  );

  // Allow execturing the script tag we added above:
  response.headers = {
    'content-security-policy': `script-src 'self' 'nonce-rAnd0m'`
  };

  return response;
}
