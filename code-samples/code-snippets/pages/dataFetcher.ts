import {DataFetcher} from '/lib/enonic/react4xp';
import {commonProcessor} from '/react4xp/components/common/CommonProcessor';
//import {helloProcessor} from './components/hello/HelloProcessor';
import {personProcessor} from './components/content/PersonProcessor';
import {pageProcessor} from './components/page/PageProcessor';

export const dataFetcher = new DataFetcher();

//dataFetcher.addContentType('portal:site', {processor: helloProcessor});
dataFetcher.addCommon({processor: commonProcessor});
dataFetcher.addContentType('com.enonic.app.hmdb:person', {processor: personProcessor});
dataFetcher.addPage('com.enonic.app.hmdb:main', {processor: pageProcessor});