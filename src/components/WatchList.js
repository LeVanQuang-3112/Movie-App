import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Link} from "react-router-dom"

export default function WatchList() {
    const {watchlist, removeMovieFromWatchlist, addMovieToWatched} = useContext(GlobalContext)
    console.log(watchlist)

    return (
        <div className="watchlist__container"> 
            {
                watchlist.length > 0 ? (
                    watchlist.map((movie) => {
                        return (
                            <div className="watchlist__item" key={movie.id}>
                                <Link to={`/movie/${movie.id}`}>
                                <div className="watchlist__image--container">
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                    alt={movie.title} 
                                    className="watchlist__image"/>
                                </div>
                                </Link>
                                <div className="watchlist__item--content">
                                    <p>{movie.title.substring(0, 20)}...</p>
                                    <div className="watchlist__btn">
                                    <button className="btn btn-default"
                                    onClick={() => removeMovieFromWatchlist(movie.id)}>
                                        Remove
                                    </button>
                                    <button className="btn btn-default"
                                    onClick={() => addMovieToWatched(movie)}
                                    >
                                        Watched
                                    </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : ( <h1>NO YOUR MOVIES IN LIST MOVIES</h1>)
            }
        </div>
    )
}
