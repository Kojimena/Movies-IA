import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"


const FormMovie = () => {
    const router = useRouter()
    
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
        localStorage.setItem('ratingData', JSON.stringify(ratingData))
        router.push("/recommendation")
      }
    

    const fetchMovie = async () => {
        const response = await fetch("")
        const movie = await response.json()
        console.log(movie)
    }

    useEffect(() => {
        fetchMovie()
    }, [])

  return (
    <div className='flex flex-col items-center justify-center glassmorphism'>
        <form className='flex flex-col items-center justify-center gap-8'>
        <label className="input input-bordered flex items-center gap-2">
            Id
        <input type="text" className="grow" placeholder="1" onChange={handleChange} name='user.id' />
        </label>
        <label className="input input-bordered flex items-center gap-2">
            Age
        <input type="number" className="grow" placeholder="18" onChange={handleChange} name='user.age' />
        </label>
        <select className="select w-full max-w-xs" onChange={handleChange} name='user.gender'>
            <option  selected>Gender</option>
            <option>F</option>
            <option>M</option>
        </select>
        <select className="select w-full max-w-xs" onChange={handleChange} name='user.occupation'>
            <option  selected>Ocupation</option>
            <option>1</option>
            <option>2</option>
        </select>
        <select className="select w-full max-w-xs" onChange={handleChange} name='movie.id'>
            <option  selected>Movie</option>
            <option>Toy Story</option>
            <option>Jumanji</option>
            <option>Star Wars</option>
            <option>Lord of the Rings</option>
            <option>Harry Potter</option>
            <option>Indiana Jones</option>
            <option>Back to the Future</option>
            <option>Ghostbusters</option>
            <option>Alien</option>
            <option>Star Trek</option>
        </select>
        <button className="btn btn-primary w-60 bg-yellow hover:bg-white" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default FormMovie