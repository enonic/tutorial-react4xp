import {DataFetcher} from '/lib/enonic/react4xp';
import {pageProcessor} from './components/page/PageProcessor';

...

export const dataFetcher = new DataFetcher();

...

dataFetcher.addPage('com.enonic.app.react4xp:Page', {processor: pageProcessor});