import {TwoColumnLayout} from './components/layouts/TwoColumn';

...

export const componentRegistry = new ComponentRegistry;

...
componentRegistry.addLayout('com.enonic.app.hmdb:2-column', {View: TwoColumnLayout});