import type {PartComponent} from '@enonic-types/core';
import type {MultiColorProps} from '../../../react4xp/myEntries/MultiColor.d';


import {forceArray} from '@enonic/js-utils/array/forceArray';
import {getComponent} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp';


declare global {
  interface XpPartMap {
    ['com.enonic.app.samples-react4xp:multi-color']: {
      colors?: string|string[]
      SSR?: boolean
    }
  }
}


const ENTRY = 'MultiColor';


export function get(request) {
  const component = getComponent<PartComponent<'com.enonic.app.samples-react4xp:multi-color'>>();

  const {
    colors = [],
    SSR: ssr = false, // <1>
  } = component.config;

  const props: MultiColorProps = {
    colors: forceArray(colors).map(c => (c || '').trim()).filter(c => !!c) // <2>
  };

  return render(
    ENTRY, // <3>
    props,
    request,
    { ssr }
  );
}
