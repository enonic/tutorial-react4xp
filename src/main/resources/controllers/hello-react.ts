import {render} from '/lib/enonic/react4xp'; // <1>
import {getContent} from '/lib/xp/portal';

export function get(request) {               // <2>
  const {displayName} = getContent();        // <3>
  const props = {displayName};
  const react4xpId = 'react4xpApp';
  const component = 'hello-react';

  return render(                             // <4>
    component,
    props,
    request,
    {
      id: react4xpId,                        // <5>
      body:                                  // <6>
        `<!DOCTYPE html><html lang="en">
        <head>
            <meta charset="UTF-8">
        </head>
        <body class="xp-page">
            <div id="${react4xpId}"></div>
        </body>
        </html>`,
      ssr: true,                             // <7>
      hydrate: true,
    }
  );
}
