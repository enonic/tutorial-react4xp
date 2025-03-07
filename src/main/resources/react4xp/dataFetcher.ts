import {DataFetcher} from '/lib/enonic/react4xp';
import {articleProcessor} from "/react4xp/components/content/ArticleProcessor";
import {personProcessor} from './components/content/PersonProcessor';
import {playlistProcessor} from './components/content/PlaylistProcessor';
import {layoutProcessor} from './components/layouts/TwoColumnProcessor';
import {pageProcessor} from './components/PageProcessor';
import {childListProcessor} from './components/parts/ChildListProcessor';
import {headingProcessor} from './components/parts/HeadingProcessor';
import {movieProcessor} from "./components/parts/MovieProcessor";

export const dataFetcher = new DataFetcher();
//dataFetcher.addContentType('portal:site', { processor: helloProcessor });


dataFetcher.addPart('com.enonic.app.hmdb:heading', {processor: headingProcessor});
dataFetcher.addPage('com.enonic.app.hmdb:main', {processor: pageProcessor});
dataFetcher.addContentType('com.enonic.app.hmdb:person', {processor: personProcessor});
dataFetcher.addPart('com.enonic.app.hmdb:movie-details', {processor: movieProcessor});
dataFetcher.addLayout('com.enonic.app.hmdb:2-column', {processor: layoutProcessor});
dataFetcher.addPart('com.enonic.app.hmdb:child-list', {processor: childListProcessor});
dataFetcher.addContentType('com.enonic.app.hmdb:playlist', {processor: playlistProcessor});
dataFetcher.addContentType('com.enonic.app.hmdb:article', {processor: articleProcessor});
