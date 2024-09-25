import {getContent} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp';

export function get(request) {
  const component = 'hello-props'; // <1>
  const content = getContent  // <2>
  const react4xpId = 'react4xpApp';

  const props = { // <3>
    name: content.displayName
    message: content.data.greeting,
    initialCount: content.data.startCount
  };

  return render(
    component,
    props,  // <4>
    request,
    {
      id: react4xpId,
      body:
      `<!DOCTYPE html><html lang="en">
        <head>
          <meta charset="UTF-8">
        </head>
        <body class="xp-page">
            <div id="${react4xpId}"></div>
        </body>
      </html>`
    }
  );
}
