import {Movie} from './components/parts/Movie';

...

export const componentRegistry = new ComponentRegistry();

...

componentRegistry.addPart('com.enonic.app.hmdb:movie-details', {View: Movie});