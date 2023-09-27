import React from 'react';

import './ActiveColorOval.scss';

export default ({color}: {color: string}) =>
  <div className="active-color-oval"
        style={{backgroundColor: color}}
  >
    {color}
  </div>
