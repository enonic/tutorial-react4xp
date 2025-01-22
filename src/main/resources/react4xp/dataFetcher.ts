import { DataFetcher } from '/lib/enonic/react4xp';
import { helloProcessor } from './components/HelloProcessor';
import { personProcessor } from './components/PersonProcessor';

export const dataFetcher = new DataFetcher();
dataFetcher.addContentType('portal:site', { processor: helloProcessor }); // <1>
dataFetcher.addContentType('com.enonic.app.hmdb:person', { processor: personProcessor });