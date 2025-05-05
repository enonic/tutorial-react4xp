import {ChildList} from './components/parts/ChildList';
import {Heading} from './components/parts/Heading';

...

export const componentRegistry = new ComponentRegistry;

...
componentRegistry.addPart('com.enonic.app.hmdb:child-list', {View: ChildList});
componentRegistry.addPart('com.enonic.app.hmdb:heading', {View: Heading});