import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function ResultCard({movie}) {
    const {addMovieToWatchlist, watchlist, watched, addMovieToWatched} = useContext(GlobalContext)

    let storedMovie = watchlist.find((item) => item.id === movie.id)
    const watchlistDisabled = storedMovie ? true : false

    let storedWatched = watched.find((item) => item.id === movie.id)
    const watchedDisabled = storedWatched ? true : false
    return (
        <div className="result__card--item">
            <div className="result__image--container">
                {
                    movie.poster_path 
                    ? (<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={movie.title}
                    className="result__image" />) 
                    : (<p></p>)
                }
            </div>
            <div className="result__card--content">
                <h4>{movie.title}</h4>
                <p>{movie.release_date}</p>
                <div>
                <button className="btn btn-primary"
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchlist(movie)}>
                    Add to watchlist
                </button>
                <button className="btn btn-primary"
                disabled={watchedDisabled}
                onClick={() => addMovieToWatched(movie)}>
                    Add to watched
                </button>
                </div>
            </div>
        </div>
    )
}
