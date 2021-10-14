import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Watched() {
    const {watched, removeMovieFromWatched} = useContext(GlobalContext)
    console.log(watched)
    return (
        <div className="watchlist__container"> 
            {
                watched.length > 0 ? (
                    watched.map((movie) => {
                        return (
                            <div className="watchlist__item" key={movie.id}>
                                <div className="watchlist__image--container">
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                                    alt={movie.title} 
                                    className="watchlist__image"/>
                                </div>
                                <div className="watchlist__item--content">
                                    <p>{movie.title.substring(0, 20)}...</p>
                                    <button className="btn btn-default"
                                    onClick={() => removeMovieFromWatched(movie.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })
                ) : ( <h1>NO YOUR MOVIES IN LIST WATCHED</h1>)
            }
        </div>
    )
}
