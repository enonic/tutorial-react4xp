import type {HelloProps} from './hello-react2.d';

import React from 'react';


function HelloReact({
  // Decontruct the props, do they can be used below:
  message,
  messageTarget,
  droppableThing,
  initialCount
}: HelloProps) {

  function makeThingDropper(droppableProp: string, initialCountProp: number) {
    let currentCount = initialCountProp;
    return () => {
      currentCount--;
      console.log(currentCount.toString(), droppableProp, 'on the wall.');

      // React4xp no longer polyfill's document, so an if block is needed to avoid SSR errors.
      if (document) {
        (document.getElementById('counter') as HTMLElement).innerText = currentCount.toString();
      }

    };
  }

  const dropThing = makeThingDropper(droppableThing, initialCount);

  return (
    <div onClick={dropThing}>
      <h1>{message} {messageTarget}!</h1>
      <p>Click me: <span id="counter">{initialCount}</span> {droppableThing} on the wall.</p>
    </div>
  );
}

// Pass on the props to the component:
export default (props: HelloProps) => <HelloReact {...props}/>;
