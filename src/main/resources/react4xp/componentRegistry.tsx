import {Article} from "/react4xp/components/content/Article";
import {ComponentRegistry} from '@enonic/react-components';
import {Person} from './components/content/Person';
import {Playlist} from './components/content/Playlist';
import {TwoColumnLayout} from './components/layouts/TwoColumn';
import {Page} from './components/Page';
import {ChildList} from './components/parts/ChildList';
import {Heading} from './components/parts/Heading';
import {Movie} from './components/parts/Movie';

export const componentRegistry = new ComponentRegistry;
//componentRegistry.addContentType('portal:site', { View: Hello }); // <1>
componentRegistry.addPart('com.enonic.app.hmdb:heading', {View: Heading}); // <2>
componentRegistry.addPage('com.enonic.app.hmdb:main', {View: Page}); // <3>
componentRegistry.addContentType('com.enonic.app.hmdb:person', {View: Person}); // <4>
componentRegistry.addPart('com.enonic.app.hmdb:movie-details', {View: Movie}); // <5>
componentRegistry.addLayout('com.enonic.app.hmdb:2-column', {View: TwoColumnLayout}); // <6>
componentRegistry.addPart('com.enonic.app.hmdb:child-list', {View: ChildList}); // <7>
componentRegistry.addContentType('com.enonic.app.hmdb:playlist', {View: Playlist});
componentRegistry.addContentType('com.enonic.app.hmdb:article', {View: Article});