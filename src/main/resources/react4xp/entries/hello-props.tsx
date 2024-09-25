import React from 'react';

function Pub(props) { // <1>
  let bottleCount = props.initialCount;
  function dropBottle() {
    bottleCount--;
    console.log(bottleCount, 'bottles of beer on the wall.');
    (document.getElementById('counter') as HTMLElement).innerText = bottleCount.toString();
  };

  return (
    <div onClick={dropBottle}>
      <h1>Welcome to ${props.displayName}, ${props.greeting}</h1>
      <button>We have <span id="counter">{bottleCount}</span> bottles of beer</button>
    </div>
  );
}

export default (props) => <Pub {...props}/>;  //<2>