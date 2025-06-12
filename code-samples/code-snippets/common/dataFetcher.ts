import {DataFetcher} from '/lib/enonic/react4xp';
import {commonProcessor} from '/react4xp/components/common/CommonProcessor';
import {helloProcessor} from './components/HelloProcessor';

export const dataFetcher = new DataFetcher();
dataFetcher.addContentType('portal:site', {processor: helloProcessor});
dataFetcher.addCommon({processor: commonProcessor});

