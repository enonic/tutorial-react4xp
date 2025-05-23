import {ComponentRegistry} from '@enonic/react-components';
import Example from './components/parts/example/example';

...

export const componentRegistry = new ComponentRegistry();

...

componentRegistry.addPart('com.enonic.app.react4xp:example', {View: Example});