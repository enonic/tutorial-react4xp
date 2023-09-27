import type {MultiColorProps} from './MultiColor.d';

import React from 'react';

import Button from '../shared/Button';                  // <1>
import ColorButtons from '../shared/ColorButtons';
import ActiveColorOval from '../shared/ActiveColorOval';

import './MultiColor.scss';                             // <2>
import '../shared/shared-styles.scss';                  // <3>


class MultiColor extends React.Component<MultiColorProps> { // <4>
  state: { selected: number } = { selected: 0 };        // <5>

  constructor(props: MultiColorProps) {
      super(props);
      // this.state = {
      //     selected: 0                              // <5>
      // };

      this.shiftUp = this.shiftUp.bind(this);         // <6>
      this.shiftDown = this.shiftDown.bind(this);
  }

  shiftUp() {                                         // <7>
      this.setState({
          selected: (this.state.selected + 1) % this.props.colors.length
      });
  };
  shiftDown() {
      this.setState({
          selected: (this.props.colors.length + this.state.selected - 1) % this.props.colors.length
      });
  };

  render() {
      const props = this.props;
      const state = this.state;
      return props.colors.length ?                    // <8>
          <div className="multi-color">

                                                      {/* <9> */}
              <Button className="my-button" clickFunc={this.shiftDown}>Previous color</Button>
              <Button className="my-button" clickFunc={this.shiftUp}>Next color</Button>

                                                      {/* <10> */}
              <ActiveColorOval color={props.colors[state.selected]} />

                                                      {/* <11> */}
              <ColorButtons colors={props.colors}
                            selectedIndex={state.selected}
                            clickFunc={ i => {
                                this.setState({selected: (i) % props.colors.length});
                            }}
              />

          </div> :

                                                      // <12>
          <p>Add some color!</p>
  }
}

                                                      // <13>
export default (props: MultiColorProps) => <MultiColor {...props} />;
