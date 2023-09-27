import React from 'react';

import Button from './Button';

import './ColorButtons.scss';

export default ({
  colors,
  selectedIndex,
  clickFunc
}: {
  colors: string[];
  selectedIndex: number;
  clickFunc: (i: number) => void;
}) =>
  <ul className="color-list">
    {colors.map( (color, i) =>

      <li key={i} className="color">
        <Button className={`color-button${i === selectedIndex ? ' selected' : ''}`}
                clickFunc={ ()=>clickFunc(i) }
                style={{backgroundColor: color, borderColor: color}}
        >
          {color}
        </Button>
      </li>

    )}
  </ul>;
