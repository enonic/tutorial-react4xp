import {movieProcessor} from "./components/parts/MovieProcessor";

...

export const dataFetcher = new DataFetcher();

...

dataFetcher.addPart('com.enonic.app.hmdb:movie-details', {processor: movieProcessor});