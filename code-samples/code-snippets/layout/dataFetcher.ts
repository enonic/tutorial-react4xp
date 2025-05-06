import {layoutProcessor} from './components/layouts/TwoColumnProcessor';

...

export const dataFetcher = new DataFetcher();

...

dataFetcher.addLayout('com.enonic.app.hmdb:2-column', {processor: layoutProcessor});