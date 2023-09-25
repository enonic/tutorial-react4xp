import {getContent} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp'; // <1>


export function get(request) {               // <2>
  const entry = getContent().page;           // <3>
  const props = {};
  const react4xpId = 'react4xpApp';

  return render(                             // <4>
    entry,
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
      ssr: false                          // <7>
    }
  );
}
