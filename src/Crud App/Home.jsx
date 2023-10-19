import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




export default function Home() {
    const [data , setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
      },[])
    
  return (
    <div className='container '>

        <h2>Crud App with JSON Server</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>



        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d , i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>
                            <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                            <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                            <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if(confirm) {
        axios.delete('http://localhost:3000/users/'+id)
        .then(res => {
            alert("Record Deleted");
            navigate('/')
        })
    }
  }
}
