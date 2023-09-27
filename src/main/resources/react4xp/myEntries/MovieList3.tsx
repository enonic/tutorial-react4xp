import React, { useState, useEffect } from 'react'

import './MovieList.scss';

import Movie from "../shared/Movie";

import doGuillotineRequest from "../../headless/guillotineRequest";
import { buildQueryListMovies, buildParentPathQuery, extractMovieArray } from "../../headless/helpers/movieListRequests";

// State values that don't need re-rendering capability, but need to be synchronously read/writable across closures.
let nextOffset = 0;             // Index for what will be the next movie to search for in a guillotine request


const MovieList = ({movies, apiUrl, parentPath, movieCount, sortExpression}) => {

                                                                    // <1>
    // Setup asynchronous component state that triggers re-render on change.
    const [state, setState] = useState({ movies });

    // UseEffect with these arguments ( function, [] ) corresponds to componentDidMount in the old-school class-based react components.
    useEffect(
        ()=>{
            console.log("Initializing...");

            nextOffset = movieCount;
        },
        []
    );


    // ------------------------------------------------------
    // Set up action methods, triggered by listener:

    // Makes a (guillotine) request for data with these search parameters and passes an anonymous callback function as
    // handleDataFunc (used on the returned list of movie data).
    const makeRequest = () => {
        console.log("Requesting", movieCount, "movies, starting from index", nextOffset);
        doGuillotineRequest({
            url: apiUrl,

            query: buildQueryListMovies(),

            variables: {
                first: movieCount,
                offset: nextOffset,
                sort: sortExpression,
                parentPathQuery: buildParentPathQuery(parentPath)
            },

            extractDataFunc: extractMovieArray,

            handleDataFunc: updateDOMWithNewMovies                  // <2>
        });
    };

    // When a movie data array is returned from the guillotine data request, this method is called.
    const updateDOMWithNewMovies = (newMovieItems) => {
        console.log("Received data:", newMovieItems);
        if (newMovieItems.length > 0) {
            console.log("Adding movies to state:", newMovieItems.map(movie => movie.title));

            nextOffset += movieCount;                               // <3>

            // Use a function, not just a new direct object/array, for mutating state object/array instead of replacing it:
            setState(oldState => ({                                 // <4>
                movies: [
                    ...oldState.movies,
                    ...newMovieItems
                ]
            }));

            console.log("Added new movies to state / DOM.");
        }
    };


    // ------------------------------------------------------------------------------------
    // Actual rendering:

    return (
        <div className="movieList" onClick={makeRequest}>
            {state.movies
                ? state.movies.map(movie =>                         // <5>
                        <Movie key={movie.id} {...movie} />
                    )
                : null
            }
        </div>
    );
};

// MUST use this export line wrapping, because of the useState hook.
export default (props) => <MovieList {...props} />;
