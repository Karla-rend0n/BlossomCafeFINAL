import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar'
import '../../css/Dashboard.css'
import Products from "./Products";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <h1>Welcome!</h1>
        </div>
    )
}

export default Dashboard