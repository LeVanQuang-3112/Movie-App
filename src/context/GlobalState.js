import React, {createContext, useEffect, useReducer} from 'react';
import AppReducer from "./AppReducer"
import {ADD_MOVIE_TO_WATCHLIST, ADD_MOVIE_TO_WATCHED, 
    REMOVE_MOVIE_FROM_WATCHLIST, REMOVE_MOVIE_FROM_WATCHED} from "./Types"
const initialState = {
    watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
    
    watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
}   

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])

    const addMovieToWatchlist =(movie) => {
         dispatch({
             type: ADD_MOVIE_TO_WATCHLIST,
             payload: movie,
         })
    }
    const removeMovieFromWatchlist = (id) => {
        dispatch({
            type: REMOVE_MOVIE_FROM_WATCHLIST,
            payload: id
        })
    }
    const addMovieToWatched = (movie) => {
        dispatch({
            type: ADD_MOVIE_TO_WATCHED,
            payload: movie,
        })
    }
    const removeMovieFromWatched = (id, quantity) => {
        dispatch({
            type: REMOVE_MOVIE_FROM_WATCHED,
            payload:  {
                id,
                quantity
            }
        })
    }

    const contextValue = {
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        addMovieToWatched,
        removeMovieFromWatchlist,
        removeMovieFromWatched
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}