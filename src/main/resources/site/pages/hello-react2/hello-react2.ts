// Importing type utils from the XP core type library.
import type {
  Content,
  PageComponent
} from '@enonic-types/core';

// Importing types for the page configuration and the component props.
import type {HelloProps} from './hello-react2.d';


import {getContent} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp';


export function get(request) {
  // Getting the page content object
  const content = getContent<
    // Using the imported type utils and the global XP type map,
    // so `the page content object` will be properly typed.
    Content<
      {},
      'portal:page',
      PageComponent<'com.enonic.app.samples-react4xp:hello-react2'>
    >
  >();

  // Deconstructing the page configuration
  // If your IDE supports it, you can hover over the variable names and see their types
  const {
    greeting,
    greetee,
    things,
    startCount
  } = content.page.config;

  // Renaming the page configuration variables into the component props, just for fun.
  // You don't have to pass along all the page configuration variables to the component.
  // And you can ofcourse add other props, that doesn't come from the page configuration.
  const props: HelloProps = {
    message: greeting,
    messageTarget: greetee,
    droppableThing: things,
    initialCount: startCount
  };

  const react4xpId = 'react4xpApp';

  return render(
    content.page, // Using the page content object as the component entry
    props,
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
