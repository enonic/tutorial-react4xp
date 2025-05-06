import {childListProcessor} from './components/parts/ChildListProcessor';
import {headingProcessor} from './components/parts/HeadingProcessor';

...

export const dataFetcher = new DataFetcher();

...

dataFetcher.addPart('com.enonic.app.hmdb:child-list', {processor: childListProcessor});
dataFetcher.addPart('com.enonic.app.hmdb:heading', {processor: headingProcessor});