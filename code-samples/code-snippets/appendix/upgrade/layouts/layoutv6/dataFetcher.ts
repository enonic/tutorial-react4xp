import {DataFetcher} from '/lib/enonic/react4xp';
import {layoutProcessor} from './components/layouts/TwoColumnProcessor';

...

export const dataFetcher = new DataFetcher();

...

dataFetcher.addLayout('com.enonic.app.react4xp:TwoColumns', {processor: layoutProcessor});