import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import API_URL from '@/api'


const FormMovie = () => {
    const router = useRouter()
    const [movies, setMovies] = useState([])
    const [ocupation, setOcupation] = useState([])
    
    const [ratingData, setRatingData] = useState({
        user: { id: '', age: '', gender: '', occupation: '' },
        movie: { id: '', title: '', genres: [] },
        rating: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        let newData = { ...ratingData };
    
        if (keys.length > 1) {
            newData[keys[0]][keys[1]] = value;
        } else {
            newData[name] = value;
        }
        
        setRatingData(newData);
    }    

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('userInfo', JSON.stringify(ratingData))
        router.push("/recommendation")
      }
    

    const fetchMovie = async () => {
        const response = await fetch(`${API_URL}/movies?limit=50`, {
            method: 'GET'
        })
        const movies_response = await response.json()
        setMovies(movies_response)

        console.log(movies)
    }

    const fetchOcupation = async () => {
        const response = await fetch(`${API_URL}/users/occupations`,
        {
            method: 'GET'
        })
        const ocupation = await response.json()
        setOcupation(ocupation)
        console.log(ocupation)
      }

    useEffect(() => {
        fetchMovie()
        fetchOcupation()
        console.log(API_URL)
    }, [])

  return (
    <div className='flex flex-col items-center justify-center glassmorphism'>
        <form className='flex flex-col items-center justify-center gap-8'>
        <label className="input input-bordered flex items-center gap-2 w-full">
            Id
        <input type="text" className=" w-full" placeholder="1" onChange={handleChange} name='user.id' />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
            Age
        <input type="number" className="w-full" placeholder="18" onChange={handleChange} name='user.age' />
        </label>
        <select className="select w-full max-w-xs" onChange={handleChange} name='user.gender'>
            <option  selected>Gender</option>
            <option>F</option>
            <option>M</option>
        </select>
        <select className="select w-full max-w-xs" onChange={handleChange} name='user.occupation'>
            <option  selected>Ocupation</option>
            {
                Object.keys(ocupation).map((key, index) => (
                    <option key={index} value={key}>{ocupation[key]}</option>
                ))
            }
        </select>
        <select className="select w-full max-w-xs" onChange={handleChange} name='movie.id'>
            <option  selected>Movie</option>
            {
                movies.map((movie, index) => (
                    <option key={index} value={movie.id}>{movie.title}</option>
                ))
            }
        </select>
        <button className="btn btn-primary w-60 bg-yellow hover:bg-white" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default FormMovie