import {Page} from '/react4xp/components/page/Page';
import {ComponentRegistry} from '@enonic/react-components';
//import {Hello} from './components/hello/Hello';
import {Person} from './components/content/Person';
import {Factbox} from './components/macro/FactBox';

export const componentRegistry = new ComponentRegistry();

//componentRegistry.addContentType('portal:site', {View: Hello});
componentRegistry.addContentType('com.enonic.app.hmdb:person', {View: Person});
componentRegistry.addMacro('factbox', {View: Factbox});
componentRegistry.addPage('com.enonic.app.hmdb:main', {View: Page});