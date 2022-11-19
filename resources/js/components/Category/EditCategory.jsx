import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const endpoint = 'https://localhost/BlossomCafeFINAL/public/api/category/'


const EditCategory = () => {
    const [nameCategory,setnameCategory] = useState('')
    const [description,setdescription] = useState(0)
    const {id}= useParams()
    const navigate= useNavigate()

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
            nameCategory:nameCategory,
            description:description
        })
        navigate('/BlossomCafeFINAL/public/categories')
    }

    useEffect( ()=>{
        const getCategoryById= async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setnameCategory(response.data.nameCategory)
            setdescription(response.data.description)
        }
        getCategoryById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
        <h3>Edit Category</h3>
        <form onSubmit={update}>
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
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}

export default EditCategory