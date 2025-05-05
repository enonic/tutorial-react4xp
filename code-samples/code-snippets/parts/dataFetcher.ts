import {childListProcessor} from './components/parts/ChildListProcessor';

...

export const dataFetcher = new DataFetcher();

...
dataFetcher.addPart('com.enonic.app.hmdb:child-list', {processor: childListProcessor});