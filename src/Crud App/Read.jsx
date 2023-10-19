import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import "./index.css"

export default function Read() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
      },[])
  return (
    <div className='container all'>
            <div className='container p-5 read'>
                <p>id: {data.id}</p>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <Link to="/" className='btn btn-warning px-5'>Back</Link>
            </div>
    </div>
  )
}
