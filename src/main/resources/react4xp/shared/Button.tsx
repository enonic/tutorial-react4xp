import React from 'react';

import './Button.scss'; // <1>

export default ({
  clickFunc,
  className,
  style,
  children
}: {
  clickFunc: () => void;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) =>
  <button className={className}
          type="button"
          onClick={clickFunc}
          style={style}
  >
    {children}
  </button>;
