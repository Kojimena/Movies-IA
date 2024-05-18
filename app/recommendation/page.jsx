"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

const Recommendation = () => {

    const [queryData, setQueryData] = useState({
        id: '',
        age: '',
        gender: '',
        occupation: '',
        movieId: '',
        title: '',
        rating: ''
    });

    useEffect(() => {
      console.log(JSON.parse(localStorage.getItem('userInfo')));
      console.log(JSON.parse(localStorage.getItem('ratingData')));

    }, [queryData])

    const recommendation = [
        {
          "title": "Dingo (1992)",
          "genres": [
            "Drama"
          ],
          "rating": 5
        },
        {
          "title": "Ballad of Narayama, The (Narayama Bushiko) (1958)",
          "genres": [
            "Drama"
          ],
          "rating": 5
        },
        {
          "title": "Every Other Weekend (1990)",
          "genres": [
            "Drama"
          ],
          "rating": 5
        },
        {
          "title": "Mille bolle blu (1993)",
          "genres": [
            "Comedy"
          ],
          "rating": 5
        },
        {
          "title": "Crows and Sparrows (1949)",
          "genres": [
            "Drama"
          ],
          "rating": 5
        }
      ]

  return (
    <div className='flex flex-col items-center justify-center p-20'>
        <h1 className="text-4xl font-bold font-montserrat text-yellow">We recommend you the following movies</h1>
        <div className="flex items-center justify-start gap-4 flex-wrap">
            {recommendation.map((movie, index) => (
            <div key={index} className="flex flex-col items-start justify-between gap-4 glassmorphism w-80 h-60">
                <h2 className="text-2xl font-bold font-montserrat text-gray-200">{movie.title}</h2>
                <p className="text-white font-montserrat">Gender: {movie.genres.join(", ")}</p>
                <p className="text-white font-montserrat">Predicted rating: {movie.rating}</p>
            </div>
            ))}
        </div>
    </div>

  )
}

export default Recommendation