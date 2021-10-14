import React, { useState } from 'react'
import { REACT_APP_TMDB_KEY } from '../apis/api';
import ResultCard from "./ResultCard"


export default function AddMovie() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    // console.log(REACT_APP_TMDB_KEY)
    const changeHandler =(e) => {
        e.preventDefault();
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if(!data.errors) {
                setResults(data.results)
            }
            else {
                setResults([])
            }
        })
    }
    // console.log(results)

    return (
        <div className="add__page">
            <div className="add__content">
                <form>
                    <input type="text" className="form-control"
                    placeholder="Search for a movie..." 
                    name="form-contr"
                    value={query}
                    onChange={changeHandler} />
                </form>
            </div>
            <ul className="add__list">
                <li>
                    {
                        results.map((movie) => {
                            return (
                                <ResultCard key={movie.id} movie={movie}/>
                            )
                        })
                    }
                </li>
            </ul>
        </div>
    )
}
