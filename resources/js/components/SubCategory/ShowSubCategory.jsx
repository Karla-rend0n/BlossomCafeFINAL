import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { result } from "lodash";

const endpoint = 'https://localhost/BlossomCafeFINAL/public/api';

const ShowSubCategory = () => {

    const [subCategory, setsubCategory] = useState([]);

    useEffect(() => {
        getAllSubCategory();
    }, [])

    const getAllSubCategory = async () => {
        const response = await axios.get(`${endpoint}/subcategories`);
        setsubCategory(response.data);
    }

    const deleteSubcategory= async(id)=> {
        const isConfirm =await Swal.fire({

            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Yes, delete it!"
        }).then((result)=> {
            return result.isConfirmed
        })
        if(!isConfirm){
            return;
        }

        await axios.delete(`${endpoint}/subcategory/${id}`).then(({data})=> {
            Swal.fire({
                icon: 'success',
                text: data.message
            })
            getAllSubCategory();
        }).catch(({response:{data}}) =>{
            Swal.fire({
                text: data.message,
                icon: 'error'
            })
        })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <Link className='btn btn-primary mb-2 float-end' to={"/BlossomCafeFINAL/public/subcategories/create"}>
                        Create
                    </Link>
                </div>
                <div className="col-12">
                    <div className="card card-body">
                        <div className="table-responsive">
                            <div className="table table table-bordered mb-0 text-center">
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Description</td>
                                            <td>Category</td>
                                            <td>Image</td>
                                            <td>Actions</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        subCategory.length > 0 ? (
                                            subCategory.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.nameSub}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.category_id}</td>
                                                    <td>
                                                        <img width="50px" src={`https://localhost/BlossomCafeFINAL/public/${item.image}`} alt="" />
                                                    </td>
                                                    <td>
                                                        <Link to={`/BlossomCafeFINAL/public/subcategory/update/${item.id}`} className="btn btn-success me-2">
                                                            Edit
                                                        </Link>
                                                        <Button variant='danger' onClick={() => deleteSubcategory(item.id)}>
                                                            Delete
                                                        </Button>
                                                    </td>

                                                </tr>

                                            ))
                                        ) : (
                                            <>
                                                <tr>
                                                    <td colSpan={'5'}>No subCategory found</td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                    </Table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShowSubCategory