import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

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
                                            <td>Photo</td>
                                            <td>Category</td>
                                            <td>Actions</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subCategory.length > 0 ? (
                                            subCategory.map((row, key) => (
                                                <tr key={key}>
                                                    <td>{row.nameSub}</td>
                                                    <td>{row.description}</td>
                                                    <td>{row.category_id}</td>
                                                    <td>
                                                        <img width="50px" src={`https://localhost/BlossomCafeFINAL/public/storage/subcategory/photo/${row.photo}`} alt="" />
                                                    </td>
                                                    <td>
                                                        <Link to={`/BlossomCafeFINAL/public/subcategories/edit/${row.id}`} className="btn btn.success me-2">
                                                            Edit
                                                        </Link>
                                                        <Button variant='danger' onClick={() => deleteSubcategory(row.id)}>
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