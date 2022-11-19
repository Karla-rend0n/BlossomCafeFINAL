import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import PropTypes from 'prop-types';

const endpoint = 'https://localhost/BlossomCafeFINAL/public/api/category/'


const ViewCategory = props => {
    const [inputs, setInputs]= useState({})
    const {id}= useParams()
    

    useEffect(()=>{
        const getCategoryById= async()=>{
            const response = await axios.get(`${endpoint}${id}`)
            setInputs({
                nameCategory:response.data.nameCategory,
                description:response.data.description,
            })
            
        }
        getCategoryById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div>
            <h2>View Category</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h2>Name</h2>
                        <p>{inputs.nameCategory}</p>
                        <h2>Description</h2>
                        <p>{inputs.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
 
}

ViewCategory.propTypes = {}

export default ViewCategory