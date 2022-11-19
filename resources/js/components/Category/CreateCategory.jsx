import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const endpoint = 'https://localhost/BlossomCafeFINAL/public/api/category'

const CreateCategory = () => {
    const [nameCategory,setnameCategory] = useState('')
    const [description,setdescription] = useState('')
    const navigate= useNavigate()

    const store = async (e)=> {
        e.preventDefault()
        await axios.post(endpoint, {nameCategory:nameCategory, description:description})
        navigate('/BlossomCafeFINAL/public/categories')
    }

  return (
    <div>
        <h3>Create Category</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={nameCategory}
                    onChange={ (e)=>setnameCategory(e.target.value)} 
                    type= 'text'
                    className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={description}
                    onChange={ (e)=>setdescription(e.target.value)} 
                    type= 'text'
                    className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
  )
}

export default CreateCategory