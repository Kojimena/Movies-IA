import React, { useState } from 'react'
import { useRouter } from "next/navigation"


const FormPerson = () => {
  const router = useRouter()

  const [userInfo, setUserInfo] = useState({
    id: '', age: '', gender: '', occupation: ''
  })

  const [ocupation, setOcupation] = useState({
    "1": 'Student',
    "2": 'Teacher',
    "3": 'Doctor'
  })

  const fetchOcupation = async () => {
    const response = await fetch("")
    const ocupation = await response.json()
    console.log(ocupation)
  }

  const handleAge = (e) => {
    setUserInfo({ ...userInfo, age: e.target.value })
  }

  const handleId = (e) => {
    setUserInfo({ ...userInfo, id: e.target.value })
  }

  const handelGender = (e) => {
    setUserInfo({ ...userInfo, gender: e.target.value })
  }

  const handleOcupation = (e) => {
    setUserInfo({ ...userInfo, occupation: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    router.push("/recommendation")
  }

  return (
    <div className='flex flex-col items-center justify-center glassmorphism'>
      <form className='flex flex-col items-center justify-center gap-8'>
        <label className="input input-bordered flex items-center gap-2">
          Id
          <input type="text" className="grow" placeholder="1" onChange={handleId} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Age
          <input type="number" className="grow" placeholder="18" onChange={handleAge} />
        </label>
        <select className="select w-full max-w-xs" onChange={handelGender}>
          <option selected>Gender</option>
          <option>F</option>
          <option>M</option>
        </select>
        <select className="select w-full max-w-xs" onChange={handleOcupation}>
          <option selected>Ocupation</option>
          {Object.keys(ocupation).map((key) => (
            <option key={key} value={parseInt(key, 10)}>{ocupation[key]}</option>
          ))}
        </select>
        <button className="btn btn-primary w-60 bg-yellow hover:bg-white" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default FormPerson