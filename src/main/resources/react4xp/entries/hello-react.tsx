import React from 'react';

function HelloReact() { // <1>
  return (
    <div>
      <h1>Hello React4XP!</h1>
    </div>
  );
}

export default (props) => <HelloReact {...props}/>;  //<2>