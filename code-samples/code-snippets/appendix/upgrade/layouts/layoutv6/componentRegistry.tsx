import {ComponentRegistry} from '@enonic/react-components';
import {TwoColumnLayout} from './components/layouts/TwoColumn';

...

export const componentRegistry = new ComponentRegistry();

...

componentRegistry.addLayout('com.enonic.app.react4xp:TwoColumns', {View: TwoColumnLayout});