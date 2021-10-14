import React, {useState, useEffect} from 'react';
import {REACT_APP_TMDB_KEY} from "../apis/api"
import axios from "axios"
import {useParams} from "react-router"

export default function MovieDetail() {
    const {id} = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_TMDB_KEY}&append_to_response=videos`)
            .then((data) => {
                setData(data.data)
                // console.log(data.data)
            }
            )
            .catch((err) => {
                console.log("err", err)
            })
    }, [id])
    console.log(data)

    return (
        <div>
               <div>
                    <h2>{data?.original_title}</h2>
                </div>
            <div className="detail__video--container">
            <iframe width="600" height="350" src={`https://www.youtube-nocookie.com/embed/${data?.videos.results[1].key}`} 
                frameBorder="0" allowFullScreen title={data?.original_title}></iframe> 
            </div>
                
        <div className="detail__container">

            <div className="detail__content">
             
                <div className="detail__title">
                    <p className="detail__info">Popularity: {data?.popularity} </p>
                    <p className="detail__info">Runtime: {data?.runtime} min</p>
                    <p className="detail__info">Status: {data?.status}</p>
                    <p className="detail__info">Budget: {data?.budget}$</p>
                </div>
                <div>
                <p>Release date: <span className="detail__info">{data?.release_date}</span></p>
                <p>Language: <span className="detail__info">{data?.original_language}</span></p>
                <p>Tagline: <span className="detail__info">{data?.tagline}</span></p>
                <p>{data?.overview}</p>
                </div>
            </div>
            <div className="detail__image--container">
                <img src={`https://image.tmdb.org/t/p/w200${data?.poster_path}`} 
                alt={data?.title} className="detail__image"/>
                
            </div>
        </div>
        </div>
    )
}
