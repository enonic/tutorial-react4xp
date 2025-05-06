import {Factbox} from '/react4xp/components/macro/FactBox';
import {ComponentRegistry} from '@enonic/react-components';
import {Person} from './components/content/Person';
import {Hello} from './components/hello/Hello';

export const componentRegistry = new ComponentRegistry;

componentRegistry.addContentType('portal:site', {View: Hello});
componentRegistry.addContentType('com.enonic.app.hmdb:person', {View: Person});
componentRegistry.addMacro('factbox', {View: Factbox});
