import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';

const endpoint = 'https://localhost/BlossomCafeFINAL/public/api'

const ShowCategory = () => {

    const [categoriesF, setCategories] = useState([]);
    
    useEffect (()=>{
        getAllCategory();
    }, [])

    const getAllCategory = async()=>{
        const response= await axios.get(`${endpoint}/categories`);
        setCategories(response.data);
        //console.log(response.data);
    }

    const deleteCategory = async (id)=>{
        await axios.delete(`${endpoint}/category/${id}`);
        getAllCategory();

    }
  return (
    <div>
        <div className="d-grid gap-2">
            <Link to="/BlossomCafeFINAL/public/categories/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { categoriesF.map ( (category)=>(
                    <tr key={category.id}>
                        <td>{category.nameCategory}</td>
                        <td>{category.description}</td>
                        <td>
                            <Link to={`/BlossomCafeFINAL/public/categories/edit/${category.id}`} className='btn btn-warning'>Edit</Link>
                            <Link to= {`/BlossomCafeFINAL/public/categories/view/${category.id}`} className='btn btn-primary'>View</Link>
                            <button onClick={()=>deleteCategory(category.id) } className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>

            </Table>
        
    </div>
  )
}

export default ShowCategory