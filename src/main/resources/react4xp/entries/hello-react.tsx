import React from 'react';

function HelloReact({displayName}) { // <1>
  let bottleCount = 99;
  function dropBottle() {
    bottleCount--;
    console.log(bottleCount, 'bottles of beer on the wall.');
    (document.getElementById('counter') as HTMLElement).innerText = bottleCount.toString();
  };

  return (
    <div onClick={dropBottle}>
      <h1>Hello {displayName}!</h1>
      <button><span id="counter">{bottleCount}</span> bottles of beer</button>
    </div>
  );
}

export default (props) => <HelloReact {...props}/>;  //<2>