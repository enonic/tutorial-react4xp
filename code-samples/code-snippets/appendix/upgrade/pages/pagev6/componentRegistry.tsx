import {ComponentRegistry} from '@enonic/react-components';
import {Page} from './components/page/Page';

...

export const componentRegistry = new ComponentRegistry();

...

componentRegistry.addPage('com.enonic.app.react4xp:Page', {View: Page});