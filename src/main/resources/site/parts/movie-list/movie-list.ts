import type {PartComponent} from '@enonic-types/core';

import {toStr} from '@enonic/js-utils/value/toStr';
import {
  getComponent,
  getContent,
  getSite
} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp';
import {executeQuery} from '/headless/guillotineApi';      // <1>
import {
  buildQueryListMovies,
  buildParentPathQuery,
  extractMovieArray
} from '/headless/helpers/movieListRequests';


declare global {
  interface XpPartMap {
    ['com.enonic.app.samples-react4xp:movie-list']: {
      descending?: boolean
      movieCount: number
      sortBy?: 'displayName'|'data.year'|'createdTime'
    }
  }
}

type MovieListComponent = PartComponent<'com.enonic.app.samples-react4xp:movie-list'>


const ENTRY = 'MovieList4';


export function get(request) {
  const content = getContent();
  const component = getComponent<MovieListComponent>();
  const {
    descending = false,
    movieCount = 0,
    sortBy = 'createdTime'
  } = component.config;

  const sortExpression = `${sortBy} ${                     // <2>
      descending ? 'DESC' : 'ASC'
  }`;

  const query = buildQueryListMovies();                    // <3>

  const variables = {                                      // <4>
    first: movieCount,
    offset: 0,
    sort: sortExpression,
    parentPathQuery: buildParentPathQuery(content._path)
  };

  const guillotineResult = executeQuery(query, variables); // <5>
  log.info('guillotineResult: %s', toStr(guillotineResult));

  const movies = extractMovieArray(guillotineResult);      // <6>

  return render(
    ENTRY,
    {                                                      // <7>
      movies,
      apiUrl: `./${getSite()._path}/api/headless`,
      parentPath: content._path,
      movieCount: component.config.movieCount,
      sortExpression
    },
    request
  );
};
