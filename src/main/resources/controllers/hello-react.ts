import {render} from '/lib/enonic/react4xp';
import {getContent} from '/lib/xp/portal';

export function get(request) {               // <1>
  const {displayName} = getContent(); 
  const props = {displayName};
  const react4xpId = 'react4xpApp';          // <2>
  const component = 'hello-react';           // <3>

  return render(                             // <4>
    component,
    props,
    request,
    {
      id: react4xpId,                        
      body:                                  // <5>
        `<!DOCTYPE html><html lang="en">
        <head>
            <meta charset="UTF-8">
        </head>
        <body class="xp-page">
            <div id="${react4xpId}"></div>
        </body>
        </html>`,
      ssr: true,                             // <6>
      hydrate: true,                         // <7>
    }
  );
}
