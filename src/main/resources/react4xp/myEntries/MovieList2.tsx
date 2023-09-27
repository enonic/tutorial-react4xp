import React, { useState, useEffect } from 'react';     // <1>

import './MovieList.scss';

import Movie from "../shared/Movie";

                                                        // <2>
import doGuillotineRequest from "../../headless/guillotineRequest";
import { buildQueryListMovies, buildParentPathQuery, extractMovieArray } from "../../headless/helpers/movieListRequests";

                                                        // <3>
// State values that don't need re-rendering capability, but need to be synchronously read/writable across closures.
let nextOffset = 0;             // Index for what will be the next movie to search for in a guillotine request


const MovieList = ({movies, apiUrl, parentPath, movieCount, sortExpression}) => {

                                                        // <4>
    // UseEffect with these arguments ( function, [] ) corresponds to componentDidMount in the old-school class-based react components, and only happens after the first time the component is rendered into the DOM.
    useEffect(
        ()=>{
            console.log("Initializing...");
            nextOffset = movieCount;
        },
        []
    );


    // ------------------------------------------------------
    // Set up action methods, triggered by listener:

                                                                    // <5>
    // Makes a (guillotine) request for data with these search parameters and passes an anonymous callback function as
    // handleDataFunc (used on the returned list of movie data).
    const makeRequest = () => {
        console.log("Requesting", movieCount, "movies, starting from index", nextOffset);
        doGuillotineRequest({
            url: apiUrl,                                            // <6>

            query: buildQueryListMovies(),                          // <7>

            variables: {
                first: movieCount,
                offset: nextOffset,                                 // <8>
                sort: sortExpression,
                parentPathQuery: buildParentPathQuery(parentPath)   // // <9>
            },

            extractDataFunc: extractMovieArray,                     // <10>

            handleDataFunc: (newMovieItems) => {                    // <11>
                console.log("Received data:", newMovieItems);
                nextOffset += movieCount;
            }
        });
    };

    // ------------------------------------------------------------------------------------
    // Actual rendering:

    return (
        <div className="movieList" onClick={makeRequest}>           {/* <12> */}
            {movies
                ? movies.map(movie =>
                        <Movie key={movie.id} {...movie} />
                    )
                : null
            }
        </div>
    );
};

// MUST use this export line wrapping, because of the hooks we'll add later.
export default (props) => <MovieList {...props} />;
